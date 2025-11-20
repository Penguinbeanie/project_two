## ClickHouse Setup & Queries
### 1. Initialize Database and Tables
Run the SQL scripts to create the database and tables:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/01_create_db_and_tables.sql
```
### 2. Load Historic Data
Execute the SQL script to load queries/data:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/02_load_historic_data.sql
```
### 3.Connect to the Client: To start an interactive SQL session, run:
 ```bash
 docker exec -it clickhouse clickhouse-client
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!

## Comments:

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

---
### 2. We deleted ingestors from compose file, so if you wanna see how our scripts work(ingest_daily/monthly_data.py), follow next step:

**For Daily Data Ingestion:**
```bash
docker exec -it airflow-scheduler python3 /opt/airflow/dags/scripts/ingest_daily_data.py
```

**For Monthly Data Ingestion:**
```bash
docker exec -it airflow-scheduler python3 /opt/airflow/dags/scripts/ingest_monthly_data.py
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


(For Superset) Changes made to the existing project 2:

1. Clickhouse password and user are now: default and default. This change is alse reflected in the dbt profile and ingestion scripts.
      Reason: empty password caused connection issues with superset

2. compose.yml now includes the following for each service:
      networks:
        shared-analytics-net:
          external: true
      Reason: this was needed to run multiple containers on the same network so that they can communicate

      Before running the compose file, run the following command to establish the network:
            ```bash
            docker network create shared-analytics-net
            ```
