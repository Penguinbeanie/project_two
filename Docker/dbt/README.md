## 🚀 Running dbt

All commands must be run in the **airflow-webserver** container.

The following commands use absolute paths and will work from any directory inside the container.

Run all models
```bash
dbt run --project-dir /opt/airflow/dbt --profiles-dir /opt/airflow/dbt
```

Run a specific model
```bash
dbt run --project-dir /opt/airflow/dbt --profiles-dir /opt/airflow/dbt -m fact_stock_price
```

Test and document
```bash
dbt test --project-dir /opt/airflow/dbt --profiles-dir /opt/airflow/dbt
dbt docs generate --project-dir /opt/airflow/dbt --profiles-dir /opt/airflow/dbt
dbt docs serve --project-dir /opt/airflow/dbt --profiles-dir /opt/airflow/dbt
```

## 🧩 Model Overview

| Layer | Model | Description |
|-------|-------|-------------|
| Staging | stg_company_details | Cleans and standardizes company info (symbol, name, sector, etc.) |
| Staging | stg_exchanges | Loads and standardizes exchange reference data |
| Staging | stg_daily_stock_data | Loads daily OHLCV price data for each ticker |
| Dimensions | dim_company | Slowly Changing Dimension Type 2 tracking company attribute history |
| Dimensions | dim_exchange | Static list of stock exchanges |
| Dimensions | dim_date | Calendar dimension (daily granularity, ~10 000 days) |
| Fact | fact_stock_price | Core fact table with prices, volumes, and dimension keys; incrementally loaded with monthly partitioning |