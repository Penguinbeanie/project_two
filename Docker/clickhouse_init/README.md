## ClickHouse Setup & Queries
### 1. Initialize Database and Tables
Run the SQL scripts to create the database and tables:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/sql/create_db_and_tables.sql
```
### 2. Load Historic Data
Execute the SQL script to load queries/data:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/sql/load_historic_data.sql
```
### 3.Connect to the Client: To start an interactive SQL session, run:
 ```bash
 docker exec -it clickhouse clickhouse-client
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!

## Comments

### 1. ClickHouse Database

**Database:** `sp600_stocks`

**Tables:**

| Table Name | Description |
|------------|-------------|
| `daily_stock_data` | Daily stock prices |
| `sp600` | S&P 600 small-cap components |
| `sp500` | S&P 500 components |
| `company_details` | Monthly company overview data |
| `exchanges` | Exchange information |
| `before202510_stock_data` | Historical stock data (pre-Oct 2025) |

---

### 2. Current Setup & Known Issues

#### Architecture
- Built **two separate ingestors**: `ingestor-daily` and `ingestor-monthly`
- Both run **once** when container starts (`restart: "no"`)

#### ⚠️ Known Issue: Data Duplication
**Problem:** Every time containers restart, data gets duplicated in tables.

**Root Cause:** Ingestors use `INSERT` without checking for existing data.

#### 🔧 Solutions

In ClickHouse:
```bash
TRUNCATE TABLE sp600_stocks.daily_stock_data;
TRUNCATE TABLE sp600_stocks.sp600;
TRUNCATE TABLE sp600_stocks.sp500;
TRUNCATE TABLE sp600_stocks.company_details;
TRUNCATE TABLE sp600_stocks.exchanges;
exit
```
Now restart: 
```bash
docker-compose restart ingestor
```

## SQL Scripts Overview

### `01_create_db_and_tables.sql`
- **Functionality**: Creates the `sp600_stocks` database and defines its core tables.
- **Details**:
    - Creates `sp600_stocks` database if it doesn't exist.
    - Defines and creates the following tables with `MergeTree` engine and `ingestion_date` column:
        - `daily_stock_data`: Stores daily stock prices (date, ticker, close, high, low, open, volume). Partitioned by month and ordered by date and ticker.
        - `sp600`: Stores S&P 600 component details (symbol, company, GICS sector/sub-industry, headquarters, SEC filings, CIK).
        - `sp500`: Stores S&P 500 component details (symbol, security, GICS sector/sub-industry, headquarters, date added, CIK, founded).
        - `company_details`: Stores monthly company overview data (symbol, company name, sector, industry, headquarters country, currency code, summary, employee count, website URL, exchange code, exchange timezone).
        - `exchanges`: Stores stock exchange information (stock exchange, MIC, region, city, market cap, monthly trade volume, time zone, UTC offset, DST period, local open/close times, lunch break, UTC winter open/close times).

### `02_load_historic_data.sql`
- **Functionality**: Loads historical data from CSV files into the ClickHouse tables.
- **Details**:
    - Inserts data into `daily_stock_data` from `historic/historic_daily_stock_data.csv`.
    - Inserts data into `sp600` from `historic/sp600_components.csv`.
    - Inserts data into `sp500` from `historic/sp500_components.csv`.
    - Inserts data into `company_details` from `historic/2025_10_19_company_overview_data.csv`.
    - Inserts data into `exchanges` from `historic/wikipedia_exchange_information.csv`, skipping the header row.

### 3. We deleted ingestors from compose file, so if you wanna see how our scripts work(ingest_daily/monthly_data.py), follow next step:

**For Daily Data Ingestion:**
```bash
docker exec -it airflow-scheduler python3 /opt/airflow/dags/scripts/ingest_daily_data.py
```

**For Monthly Data Ingestion:**
```bash
docker exec -it airflow-scheduler python3 /opt/airflow/dags/scripts/ingest_monthly_data.py
```
