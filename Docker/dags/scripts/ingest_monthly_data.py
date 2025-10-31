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
                user='airflow',
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
BASE_AIRFLOW_FILES = "/opt/airflow/data"

def get_airflow_path(subdir, filename):
    """Return full path for file system access from Airflow container"""
    return os.path.join(BASE_AIRFLOW_FILES, subdir, filename)

def get_clickhouse_path(subdir, filename):
    """Return relative path for ClickHouse file() function"""
    return os.path.join(subdir, filename)

def list_files(subdir, suffix):
    """Return sorted list of files in a folder ending with suffix"""
    folder = get_airflow_path(subdir, "")
    if not os.path.exists(folder):
        print(f"Folder not found: {folder}")
        return []
    files = sorted([f for f in os.listdir(folder) if f.endswith(suffix)])
    print(f"Found {len(files)} files in {folder} matching '*{suffix}'")
    return files

# --------------------------
# Ingestion functions
# --------------------------

def ingest_monthly_company_overview(client):
    monthly_files = list_files("monthly", "_company_overview_data.csv")
    if not monthly_files:
        print("No monthly overview files found, skipping.")
        return
    latest_file = monthly_files[-1]
    airflow_path = get_airflow_path("monthly", latest_file)
    ch_path = get_clickhouse_path("monthly", latest_file)
    if not os.path.exists(airflow_path):
        print(f"ERROR: File not found at {airflow_path}")
        return
    print(f"Loading monthly company overview from {airflow_path}")
    print(f"ClickHouse will read from: {ch_path}")
    client.execute(f"""
        INSERT INTO sp600_stocks.company_details
            (symbol, company_name, sector, industry, headquarters_country, currency_code, company_summary, employee_count, website_url, exchange_code, exchange_timezone, ingestion_date)
        SELECT
            toString(Symbol),
            toString(CompanyName),
            toString(Sector),
            toString(Industry),
            toString(HeadquartersCountry),
            toString(CurrencyCode),
            toString(CompanySummary),
            toUInt32(EmployeeCount),
            toString(WebsiteURL),
            toString(ExchangeCode),
            toString(ExchangeTimezone),
            now()
        FROM file('{ch_path}', 'CSVWithNames')
    """)
    print("Monthly company overview loaded.")

def ingest_monthly_exchange_data(client):
    monthly_files = list_files("monthly", "_exchange_information.csv")
    if not monthly_files:
        print("No monthly exchange files found, skipping.")
        return
    latest_file = monthly_files[-1]
    airflow_path = get_airflow_path("monthly", latest_file)
    ch_path = get_clickhouse_path("monthly", latest_file)
    if not os.path.exists(airflow_path):
        print(f"ERROR: File not found at {airflow_path}")
        return
    print(f"Loading exchange data from {airflow_path}")
    print(f"ClickHouse will read from: {ch_path}")
    client.execute(f"""
        INSERT INTO sp600_stocks.exchanges
            (stock_exchange, mic, region, city, market_cap_usd_tn, monthly_trade_volume_usd_bn, time_zone, utc_offset, dst_period, local_open_time, local_close_time, has_lunch_break, utc_winter_open_time, utc_winter_close_time, ingestion_date)
        SELECT
            toString(`Stock exchange`),
            toString(MIC),
            toString(Region),
            toString(City),
            toString(`Market cap (USD tn)`),
            toUInt32(`Monthly trade volume (USD bn)`),
            toString(`Time zone`),
            toString(`Δ`),
            toString(DST),
            toString(`Open hours (local time) (Open)`),
            toString(`Open hours (local time) (Close)`),
            toString(`Open hours (local time) (Lunch)`),
            toString(`UTC, winter only (Open)`),
            toString(`UTC, winter only (Close)`),
            now()
        FROM file('{ch_path}', 'CSVWithNames')
    """)
    print("Exchange data loaded.")

# --------------------------
# Main loop
# --------------------------

if __name__ == "__main__":
    client = create_client()
    print("=== Starting Monthly Data Ingestion ===")
    ingest_monthly_company_overview(client)
    ingest_monthly_exchange_data(client)
    

    print("=== Monthly ingestion cycle complete ===")
