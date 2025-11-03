from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator
import os

# env
DATA_DIR = os.getenv("DATA_DIR", "/opt/airflow/data")
SCRIPTS_DIR = os.getenv("SCRIPTS_DIR", "/opt/airflow/dags/scripts")
DBT_PROFILES_DIR = os.getenv("DBT_PROFILES_DIR", "/opt/airflow/dbt")
DBT_TARGET = os.getenv("DBT_TARGET", "dev")
DBT_DIR = os.getenv("DBT_DIR", "/opt/airflow/dbt")

default_args = {
    "owner": "data-team",
    "depends_on_past": False,
    "email_on_failure": False,
    "retries": 1,
    "retry_delay": timedelta(minutes=5),
}

with DAG(
    dag_id="daily_market_etl",
    description="Daily market data ETL: extract SP500 & SP600 data, ingest, and transform",
    schedule_interval="0 6 * * 2-6",
    start_date=datetime(2025, 1, 1),
    catchup=False,
    default_args=default_args,
    tags=["daily", "orchestration"],
) as dag:
    base_env = {**os.environ, "DATA_DIR": DATA_DIR}

    # All tasks must be created within this DAG context
    extract_components = BashOperator(
        task_id="extract_components",
        bash_command=f"python {SCRIPTS_DIR}/daily_extract_sp500and600_components.py",
        env=base_env,
        dag=dag,  # Important: associate with DAG
    )

    extract_daily_prices = BashOperator(
        task_id="extract_daily_prices",
        bash_command=f"python {SCRIPTS_DIR}/daily_extract_daily_prices.py",
        env=base_env,
        dag=dag,
    )

    ingest_daily_data = BashOperator(
        task_id="ingest_daily_data",
        bash_command=f"python {SCRIPTS_DIR}/ingest_daily_data.py",
        env=base_env,
        dag=dag,
    )

    #     load_analytics_daily_prices = BashOperator(
    #         task_id="load_analytics_daily_prices",
    #         bash_command=r'''
    #           set -euo pipefail
    #           cat <<'SQL' | curl -sS -u default: --data-binary @- "http://clickhouse:8123/?database=star_schema"
    # ALTER TABLE star_schema.daily_stock_prices
    # DELETE WHERE Date >= subtractDays(today(), 3)
    # SQL
    #           cat <<'SQL' | curl -sS -u default: --data-binary @- "http://clickhouse:8123/?database=star_schema"
    # INSERT INTO star_schema.daily_stock_prices
    # SELECT
    #   toDate(date)        AS Date,
    #   toString(ticker)    AS Ticker,
    #   toFloat64(open)     AS Open,
    #   toFloat64(high)     AS High,
    #   toFloat64(low)      AS Low,
    #   toFloat64(close)    AS Close,
    #   toFloat64(close)    AS AdjClose,
    #   toUInt64(volume)    AS Volume
    # FROM sp600_stocks.daily_stock_data
    # WHERE date >= subtractDays(today(), 3)
    # SQL
    #         ''',
    #         env=base_env,
    #         dag=dag,
    #     )
    #
    #     load_index_membership = BashOperator(
    #         task_id="load_index_membership",
    #         bash_command=r'''
    #           set -euo pipefail
    #           # Delete ALL index membership data
    #           cat <<'SQL' | curl -sS -u default: --data-binary @- "http://clickhouse:8123/?database=star_schema"
    # ALTER TABLE star_schema.index_membership_snapshots DELETE WHERE 1=1
    # SQL
    #           # Load ALL SP500 membership
    #           cat <<'SQL' | curl -sS -u default: --data-binary @- "http://clickhouse:8123/?database=star_schema"
    # INSERT INTO star_schema.index_membership_snapshots
    # SELECT
    #   today() AS snapshot_date,
    #   'sp500' AS index_name,
    #   toString(symbol) AS Symbol,
    #   now() AS ingested_at
    # FROM sp600_stocks.sp500
    # SQL
    #           # Load ALL SP600 membership
    #           cat <<'SQL' | curl -sS -u default: --data-binary @- "http://clickhouse:8123/?database=star_schema"
    # INSERT INTO star_schema.index_membership_snapshots
    # SELECT
    #   today() AS snapshot_date,
    #   'sp600' AS index_name,
    #   toString(symbol) AS Symbol,
    #   now() AS ingested_at
    # FROM sp600_stocks.sp600
    # SQL
    #         ''',
    #         env=base_env,
    #         dag=dag,
    #     )

    dbt_run = BashOperator(
        task_id="dbt_run",
        bash_command=(f"cd {DBT_DIR} && dbt run"),
        env=base_env,
        dag=dag,
    )

    # Set dependencies
    extract_components >> extract_daily_prices >> ingest_daily_data >> dbt_run
