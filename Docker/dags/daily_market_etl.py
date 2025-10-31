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

default_args = {"owner":"data-team","depends_on_past":False,"email_on_failure":False,
                "retries":1,"retry_delay":timedelta(minutes=5)}

with DAG(
    dag_id="daily_market_etl",
    description="Daily market data ETL: extract, ingest, and transform",
    schedule_interval="0 6 * * 1-5",
    start_date=datetime(2025,1,1),
    catchup=False,
    default_args=default_args,
    tags=["daily","orchestration"],
) as dag:

    base_env = {**os.environ, "DATA_DIR": DATA_DIR}

    extract_daily_prices = BashOperator(
        task_id="extract_daily_prices",
        bash_command=f"python {SCRIPTS_DIR}/daily_extract_daily_prices.py",
        env=base_env,
    )

    ingest_daily_data = BashOperator(
        task_id="ingest_daily_data",
        bash_command=f"python {SCRIPTS_DIR}/ingest_daily_data.py",
        env=base_env,
    )

    dbt_run = BashOperator(
        task_id="dbt_run",
        bash_command=(
            f"cd {DBT_DIR} && "
            f"dbt run --profiles-dir {DBT_PROFILES_DIR} --target {DBT_TARGET}"
        ),
        env=base_env,
    )

    extract_daily_prices >> ingest_daily_data >> dbt_run