from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator

default_args = {
    "owner": "data-team",
    "depends_on_past": False,
    "email_on_failure": False,
    "retries": 1,
    "retry_delay": timedelta(minutes=5),
}

with DAG(
    dag_id="daily_market_etl",
    description="Daily market data ETL: extract, ingest, and transform",
    schedule_interval="0 6 * * 1-5",  # iga tööpäeva hommikul kell 6
    start_date=datetime(2025, 1, 1),
    catchup=False,
    default_args=default_args,
    tags=["daily", "orchestration"],
) as dag:

    extract_daily_prices = BashOperator(
        task_id="extract_daily_prices",
        bash_command="python /opt/airflow/dags/scripts/daily_extract_daily_prices.py",
    )

    ingest_daily_data = BashOperator(
        task_id="ingest_daily_data",
        bash_command="python /opt/airflow/dags/scripts/ingest_daily_data.py",
    )

    dbt_run = BashOperator(
        task_id="dbt_run",
        bash_command="dbt run --profiles-dir /opt/airflow/dbt --target prod",
    )

    extract_daily_prices >> ingest_daily_data >> dbt_run
