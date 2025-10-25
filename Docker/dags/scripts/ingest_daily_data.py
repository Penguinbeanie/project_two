import os
import time
from clickhouse_driver import Client
from datetime import datetime

# --------------------------
# ClickHouse connection
# --------------------------
def create_client():
    """Retry connecting to ClickHouse until it's ready."""
    for attempt in range(10):
        try:
            client = Client(
                host='clickhouse',
                port=9000,
                user='default',
                password='password',
                database='sp600_stocks'
            )
            client.execute("SELECT 1")
            print("Connected to ClickHouse")
            return client
        except Exception:
            print(f"ClickHouse not ready, retrying ({attempt+1}/10)...")
            time.sleep(5)
    raise Exception("Failed to connect to ClickHouse after 10 retries")

# --------------------------
# Helper functions
# --------------------------
BASE_USER_FILES = "/var/lib/clickhouse/user_files"

def get_data_path(subdir, filename):
    """Return full path inside ClickHouse user_files folder for file system access"""
    return os.path.join(BASE_USER_FILES, subdir, filename)

def get_clickhouse_path(subdir, filename):
    """Return relative path for ClickHouse file() function"""
    return os.path.join(subdir, filename)

def list_files(subdir, suffix):
    """Return sorted list of files in a folder ending with suffix"""
    folder = get_data_path(subdir, "")
    if not os.path.exists(folder):
        return []
    return sorted([f for f in os.listdir(folder) if f.endswith(suffix)])

# --------------------------
# Daily Ingestion functions
# --------------------------
def ingest_daily_stock_data(client):
    """Ingest all available daily stock CSVs in ./data/daily/"""
    daily_files = list_files("daily", "_daily_stock_data.csv")
    if not daily_files:
        print("No daily stock files found, skipping.")
        return
    latest_file = daily_files[-1]
    full_path = get_data_path("daily", latest_file)
    ch_path = get_clickhouse_path("daily", latest_file)
    print(f"Loading daily stock data from {full_path}")
    client.execute(f"""
        INSERT INTO sp600_stocks.daily_stock_data
            (date, ticker, close, high, low, open, volume, ingestion_date)
        SELECT
            toDate(Date),
            toString(Ticker),
            toFloat64(Close),
            toFloat64(High),
            toFloat64(Low),
            toFloat64(Open),
            toUInt64(Volume),
            today()
        FROM file('{ch_path}', 'CSVWithNames')
    """)
    print("Daily stock data loaded.")

def ingest_sp500_components(client):
    """Ingest SP500 components from fixed file"""
    filename = "sp500_components.csv"
    full_path = get_data_path("daily", filename)
    
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}, skipping SP500 ingestion.")
        return
    
    ch_path = get_clickhouse_path("daily", filename)
    
    print(f"Loading SP500 components from {full_path}")
    client.execute(f"""
        INSERT INTO sp600_stocks.sp500 
            (symbol, security, gics_sector, gics_sub_industry, headquarters_location, date_added, cik, founded, ingestion_date)
        SELECT
            Symbol, 
            Security, 
            `GICS Sector`, 
            `GICS Sub-Industry`, 
            `Headquarters Location`, 
            toDate32(`Date added`),
            CIK, 
            Founded, 
            today()
        FROM file('{ch_path}', 
          'CSVWithNames', 
          'Symbol String, Security String, `GICS Sector` String, `GICS Sub-Industry` String, `Headquarters Location` String, `Date added` String, CIK String, Founded String')
    """)
    print("SP500 component data loaded.")

def ingest_sp600_components(client):
    """Ingest SP600 components from fixed file"""
    daily_files = list_files("daily", "sp600_components.csv")
    if not daily_files:
        print("No SP600 components file found, skipping.")
        return
    latest_file = daily_files[-1]
    full_path = get_data_path("daily", latest_file)
    ch_path = get_clickhouse_path("daily", latest_file)
    
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}, skipping SP600 ingestion.")
        return
    
    print(f"Loading SP600 components from {full_path}")
    client.execute(f"""
        INSERT INTO sp600_stocks.sp600
            (symbol, company, gics_sector, gics_sub_industry, headquarters_location, sec_filings, cik, ingestion_date)
        SELECT
            toString(Symbol),
            toString(Company),
            toString(`GICS Sector`),
            toString(`GICS Sub-Industry`),
            toString(`Headquarters Location`),
            toString(`SEC filings`),
            toString(CIK),
            today()
        FROM file('{ch_path}', 'CSVWithNames')
    """)
    print("SP600 component data loaded.")

# --------------------------
# Main
# --------------------------
if __name__ == "__main__":
    client = create_client()
    
    print("=== Starting Daily Data Ingestion ===")
    ingest_daily_stock_data(client)
    ingest_sp500_components(client)
    ingest_sp600_components(client)
    
    print("=== Daily ingestion cycle complete ===")