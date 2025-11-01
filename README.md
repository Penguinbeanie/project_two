# Project Two — Data Orchestration with Airflow, dbt, and ClickHouse

This part of the project builds a full end-to-end data orchestration pipeline integrating **Airflow**, **dbt**, and **ClickHouse**.  
It automates data extraction from Yahoo Finance, loading into ClickHouse, and transformation using dbt.

---

## 1. Architecture Overview
Yahoo Finance → [Airflow extract] → CSV in /opt/airflow/data

↓

[Ingest → ClickHouse (bronze layer)]

↓

[dbt run → marts / gold layer]

### DAGs

| DAG Name | Description |
|-----------|--------------|
| `daily_market_etl` | Extracts daily stock data, ingests into ClickHouse, and runs dbt transformations. |
| `monthly_reference_etl` | Extracts reference data (exchanges, companies), ingests monthly datasets, runs dbt core, refreshes gold layer, and runs dbt tests. |

---

## 2. Requirements

- **Docker** and **Docker Compose**
- **Internet connection** (for Yahoo Finance data via `yfinance`)
- **Ports:**
  - Airflow UI → `localhost:8080`
  - ClickHouse → `8123` (HTTP) / `9000` (native)

---

## 3. Quick Start

### 1️⃣ Clone the repository
```bash
git clone <your_repo_url>
cd project_two/Docker
```

2️⃣ Create .env
```bash
cat << 'EOF' > .env
DATA_DIR=/opt/airflow/data
SCRIPTS_DIR=/opt/airflow/dags/scripts
DBT_PROFILES_DIR=/opt/airflow/dbt
DBT_TARGET=dev
DBT_GOLD_SELECTOR=tag:gold
SCHEDULE_TZ=Europe/Tallinn
EOF
```


3️⃣ Launch Docker
```bash
docker compose up -d
```


4️⃣ Open Airflow UI

- URL: http://localhost:8080
- Default credentials (if unchanged): airflow / airflow

The compose.yml mounts ./dags, ./dbt, and ./data into /opt/airflow/dags, /opt/airflow/dbt, and /opt/airflow/data inside containers.

## 4. Environment Verification
```bash
# Check .env variables inside Airflow
docker compose exec airflow-webserver bash -lc "env | grep -E 'DATA_DIR|DBT_TARGET|DBT_PROFILES_DIR'"

# Verify ClickHouse connection
docker compose exec clickhouse bash -lc "clickhouse-client -q 'SHOW DATABASES'"
```
If the database doesn't exist yet, you can create it using this:
```bash
docker compose exec clickhouse bash -lc "
clickhouse-client -q \"
CREATE DATABASE IF NOT EXISTS analytics;
CREATE TABLE IF NOT EXISTS analytics.daily_stock_prices
(
  Date Date,
  Ticker String,
  Open Float64, High Float64, Low Float64, Close Float64,
  AdjClose Float64, Volume UInt64
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(Date)
ORDER BY (Ticker, Date);
\"
"
```
## 5. Running the Airflow DAGs
1. Open the Airflow UI

2. Enable and Trigger the following DAGs:
   - daily_market_etl → Extracts daily prices, writes CSVs, ingests into ClickHouse, runs dbt transformations.
   - monthly_reference_etl → Extracts monthly reference data, ingests it, runs dbt core, performs full-refresh gold models, and runs tests.

All tasks run with the shared environment variable DATA_DIR
dbt tasks execute in /opt/airflow/dbt.


## 6. Data Locations
| Layer               | Location                                                  | Description                         |
| ------------------- | --------------------------------------------------------- | ----------------------------------- |
| Bronze              | `/opt/airflow/data/daily/` & `/opt/airflow/data/monthly/` | Raw CSV files extracted by Airflow. |
| Bronze (ClickHouse) | `analytics.daily_stock_prices`                            | Ingested raw daily data.            |
| Marts / Gold        | `analytics.dim_*` and `analytics.fact_*` tables           | dbt-transformed models.             |

## 7. dbt Usage
Run dbt inside Airflow container
```
docker compose exec airflow-webserver bash -lc "cd /opt/airflow/dbt && dbt debug --profiles-dir . --target dev"
docker compose exec airflow-webserver bash -lc "cd /opt/airflow/dbt && dbt run --profiles-dir . --target dev"
docker compose exec airflow-webserver bash -lc "cd /opt/airflow/dbt && dbt test --profiles-dir . --target dev --select tag:gold"
```

## 8. Airflow DAG visuals
<img width="930" height="404" alt="daily_dag_schema_correct" src="https://github.com/user-attachments/assets/dcfd910e-a704-40d2-8a14-c37f705f7852" />
<img width="756" height="325" alt="monthly_dag_schema" src="https://github.com/user-attachments/assets/14f3bd66-4d7c-4827-aad4-83316023a733" />
<img width="955" height="505" alt="dags" src="https://github.com/user-attachments/assets/513eb8b3-56ac-4c3e-9b0c-47d3ff4c1786" />



## 9. Example Analytical Queries
The example analytical queries are the following:

For the 5th query we decided to look at it from many aspects:




## 10. Common Issues
| Problem                         | Cause                            | Fix                                                                                        |
| ------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| `FileNotFoundError` for CSV     | Wrong relative paths             | Use `DATA_DIR=/opt/airflow/data` and `os.path.join`.                                       |
| `dbt_project.yml not found`     | Wrong dbt working directory      | Use `cd /opt/airflow/dbt && dbt run ...`                                                   |
| `No target named prod`          | Missing target in `profiles.yml` | Set `DBT_TARGET=dev` in `.env`.                                                            |
| `Missing columns in ClickHouse` | CSV was wide-format              | Ensure script outputs **long format** (`Date,Ticker,Open,High,Low,Close,AdjClose,Volume`). |



