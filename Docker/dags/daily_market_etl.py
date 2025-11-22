from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonVirtualenvOperator
from scripts.iceberg_ingest_daily import ingest_iceberg_daily_isolated
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

    iceberg_bronze_ingest = PythonVirtualenvOperator(
        task_id="ingest_iceberg_daily",
        python_callable=ingest_iceberg_daily_isolated,
        requirements=[
            "pyiceberg[s3fs]>=0.7.0",
            "pandas",
            "pydantic>=2.0",
            "pyarrow"
        ],
        system_site_packages=False,
        dag=dag,
    )

    create_ch_iceberg_table = BashOperator(
        task_id="create_ch_iceberg_table",
        bash_command="python /opt/airflow/dags/scripts/create_clickhouse_iceberg_table.py",
        env=base_env,
        dag=dag,
    )

    ingest_daily_data = BashOperator(
        task_id="ingest_daily_data",
        bash_command=f"python {SCRIPTS_DIR}/ingest_daily_data.py",
        env=base_env,
        dag=dag,
    )

    dbt_run = BashOperator(
        task_id="dbt_run",
        bash_command=(f"cd {DBT_DIR} && dbt run"),
        env=base_env,
        dag=dag,
    )

    extract_components \
    >> extract_daily_prices \
    >> iceberg_bronze_ingest \
    >> create_ch_iceberg_table \
    >> ingest_daily_data \
    >> dbt_run