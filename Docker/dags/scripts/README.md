# Data Engineering Project 2 - DAG Scripts

This directory contains Python scripts used in the data engineering project for extracting and ingesting stock market data. These scripts are designed to be orchestrated as Directed Acyclic Graphs (DAGs) in a system like Apache Airflow.

## Scripts Overview

### `daily_extract_daily_prices.py`
- **Functionality**: Extracts daily stock prices for S&P 500 and S&P 600 components using the `yfinance` library.
- **Process**:
    1. Reads ticker symbols from `sp500_components.csv` and `sp600_components.csv`.
    2. Fetches daily stock data for the previous day.
    3. Transforms the data into a long format (Date, Ticker, Open, High, Low, Close, Volume).
    4. Saves the processed data as a CSV file in the 'daily' subdirectory within the Airflow DATA_DIR (which maps to /opt/airflow/data in the container) with a timestamped filename (e.g., `YYYY_MM_DD_daily_stock_data.csv`).

### `daily_extract_sp500and600_components.py`
- **Functionality**: Extracts the list of S&P 500 and S&P 600 component stocks from Wikipedia.
- **Process**:
    1. Fetches HTML content from the Wikipedia pages for S&P 500 and S&P 600 companies.
    2. Parses the HTML tables to extract company symbols and other relevant information.
    3. Saves the S&P 500 components to `sp500_components.csv` in the 'daily' subdirectory within the Airflow DATA_DIR.
    4. Saves the S&P 600 components to `sp600_components.csv` in the 'daily' subdirectory within the Airflow DATA_DIR.

### `ingest_daily_data.py`
- **Functionality**: Ingests daily stock data and S&P 500/600 components into a ClickHouse database.
- **Process**:
    1. Uses the Airflow DATA_DIR (which maps to /opt/airflow/data in the container) for file system access and ClickHouse file() function for relative paths.
    2. Identifies the latest daily stock data CSV file from `daily` subdirectory.
    3. Ingests the daily stock data into the `sp600_stocks.daily_stock_data` table with timestamp using now().
    4. Ingests S&P 500 components from `sp500_components.csv` into the `sp600_stocks.sp500` table with timestamp using now().
    5. Ingests S&P 600 components from `sp600_components.csv` into the `sp600_stocks.sp600` table with timestamp using now().

### `ingest_monthly_data.py`
- **Functionality**: Ingests monthly company overview and exchange information into a ClickHouse database.
- **Process**:
    1. Uses the Airflow DATA_DIR (which maps to /opt/airflow/data in the container) for file system access and ClickHouse file() function for relative paths.
    2. Identifies the latest monthly company overview CSV file from monthly subdirectory.
    3. Ingests the company overview data into the `sp600_stocks.company_details` table with timestamp using now().
    4. Ingests the exchange data into the `sp600_stocks.exchanges` table with timestamp using now().

### `monthly_extract_company_overview.py`
- **Functionality**: Extracts detailed company overview information for S&P 500 and S&P 600 components using the `yfinance` library.
- **Process**:
    1. Reads ticker symbols from `sp500_components.csv` and `sp600_components.csv`.
    2. Iterates through each ticker, fetching comprehensive company information (e.g., company name, sector, industry, headquarters, currency, employee count, website, exchange details) using `yfinance`.
    3. Aggregates the extracted dimensional data.
    4. Saves the combined company overview data as a CSV file in the 'monthly' subdirectory within the Airflow DATA_DIR (which maps to /opt/airflow/data in the container) with a timestamped filename (e.g., `YYYY_MM_DD_company_overview_data.csv`).

### `monthly_extract_exchange_information.py`
- **Functionality**: Extracts information about major stock exchanges from Wikipedia.
- **Process**:
    1. Fetches HTML content from the Wikipedia page listing major stock exchanges.
    2. Parses the HTML table to extract details such as stock exchange name, MIC, region, city, market cap, trade volume, and operating hours.
    3. Flattens the multi-indexed header of the table for easier processing.
    3. Saves the extracted exchange information as `wikipedia_exchange_information.csv` in the 'monthly' subdirectory within the Airflow DATA_DIR.