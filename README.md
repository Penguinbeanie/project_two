# Project: Data Orchestration with Airflow, dbt, and ClickHouse

This project implements an end-to-end data orchestration pipeline. It automates the process of extracting financial data, loading it into a data warehouse, and transforming it for analytics.

The pipeline leverages the following stack:
- **Apache Airflow:** For orchestrating and scheduling data workflows.
- **dbt (Data Build Tool):** For transforming data within the warehouse.
- **ClickHouse:** For storing our data.

## Environment Overview

This project runs a containerized environment using Docker Compose, orchestrating several key services:

*   **Airflow:** The core of the orchestration pipeline, running with a `LocalExecutor`. It consists of a web server and a scheduler. The DAGs (`dags/`), data (`data/`), and dbt project (`dbt/`) directories are mounted from your local machine, allowing for easy development and modification.
    *   **Webserver:** Accessible at `http://localhost:8080`.
*   **ClickHouse:** The primary data warehouse for storing stock data.
    *   **HTTP Interface:** Accessible on port `8123`.
    *   **Native Interface:** Accessible on port `9000`.
*   **PostgreSQL:** Serves as the metadata database for Airflow.

This setup is defined in the `compose.yml` file, which links these services together and manages their configuration, volumes, and networking.

## Orchestration (Airflow DAGs)

The `dags/` directory contains the Airflow DAGs that orchestrate the entire ETL pipeline.

-   **`daily_market_etl`**: This DAG runs every weekday. It extracts the latest daily stock prices, ingests the data into ClickHouse, and then triggers a `dbt run` to transform the data.
-   **`monthly_reference_etl`**: Scheduled for the first of each month, this DAG extracts and ingests reference data (company and exchange information). It then runs the dbt models, performs a full refresh on the final "gold" tables, and runs data quality tests.

## Pipeline Scripts

The core logic of the data pipeline is contained within a series of Python scripts located in `dags/scripts/`. These are orchestrated by Airflow to perform extraction and ingestion tasks.

### Data Extraction

Extraction scripts are responsible for fetching data from various web sources and saving it locally as CSV files.

-   **Daily Stock Data:** Scripts run daily to download the latest stock prices for S&P 500 and S&P 600 companies using the `yfinance` library.
-   **Company & Exchange Data:** On a monthly basis, scripts extract foundational data, including detailed company profiles from `yfinance` and a list of major stock exchanges from Wikipedia.

### Data Ingestion

Ingestion scripts take the raw CSV files produced by the extraction process and load them into the ClickHouse database.

-   The scripts connect to the ClickHouse service and execute `INSERT` queries to bulk-load data from the CSV files into the appropriate tables.
-   This process is divided into daily and monthly ingestion tasks to handle the different data cadences.

## Data Transformation (dbt)

The `dbt/` directory houses the dbt project responsible for the transformation phase of the pipeline. It transforms the raw, ingested data into a structured star schema suitable for analytics.

-   **Staging Models:** Raw data from the `sp600_stocks` database is first cleaned and standardized in staging models, which are materialized as views.
-   **Marts Models:** The final, user-facing models are built in the `marts` directory. This includes:
    -   `dim_date`: A calendar dimension table.
    -   `dim_company` and `dim_exchange`: Dimension tables that track historical changes using a Slowly Changing Dimension (SCD) Type 2 approach.
    -   `fact_stock_price`: A central fact table that joins stock data with the dimensions, loaded incrementally to improve performance.
-   **Data Quality:** The project includes data tests to validate the integrity and relationships within the final models.

## Database Initialization

The `clickhouse_init/` directory contains SQL scripts crucial for setting up the ClickHouse database when the Docker environment starts.

-   **Schema Definition:** The `01_create_db_and_tables.sql` script defines the `sp600_stocks` database and all the necessary tables for storing daily stock data, S&P 500/600 components, company details, and exchange information.
-   **Historical Data Loading:** The `02_load_historic_data.sql` script populates these newly created tables with historical data from predefined CSV files, ensuring the database has a foundational dataset upon initialization.

## Quick Start

Follow these steps to get the pipeline running from a clean state.

1.  **Navigate to the Docker Directory**

    All commands should be run from the `Docker/` directory.
    ```bash
    cd Docker
    ```

2.  **Clean Up Previous Runs (Optional)**

    To ensure a completely fresh start, you can tear down any existing containers and volumes, and clear out the data from previous runs.
    ```bash
    docker compose down -v
    rm -f data/daily/*
    rm -f data/monthly/*
    ```

3.  **Launch the Environment**

    Build fresh images and start all the services in detached mode.
    ```bash
    docker compose up --build -d
    ```
    Monitor the logs until you see the confirmation that the Airflow webserver is running and listening on port 8080.

4.  **Access the Airflow UI**

    Once the services are running, open your web browser and navigate to:
    [http://localhost:8080](http://localhost:8080)

    Log in with the default credentials:
    -   **Username:** `airflow`
    -   **Password:** `airflow`

5.  **Run the Pipelines**

    In the Airflow UI, you will see two DAGs.

    -   First, enable the `daily_market_etl` DAG and wait for it to complete.
    -   Then, enable the `monthly_reference_etl` DAG.

6.  **Verify the Data in ClickHouse**

    While the Docker environment is running, you can connect to the ClickHouse database to query the data.
    ```bash
    docker compose exec clickhouse clickhouse-client --database sp600_stocks
    ```

    Once inside the client, you can run queries to inspect the tables:
    ```sql
    SHOW TABLES;

    SELECT count(*) FROM fact_stock_price;

    SELECT * FROM dim_company LIMIT 5;
    ```
