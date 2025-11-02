from datetime import datetime, timedelta
import os
from airflow import DAG
from airflow.operators.bash import BashOperator

# --- Configuration from environment (.env file) ---
SCRIPTS_DIR = os.getenv("SCRIPTS_DIR", "/opt/airflow/dags/scripts")
DBT_PROFILES_DIR = os.getenv("DBT_PROFILES_DIR", "/opt/airflow/dbt")
DATA_DIR = os.getenv("DATA_DIR", "/opt/airflow/data")
DBT_DIR = os.getenv("DBT_DIR", "/opt/airflow/dbt")


default_args = {
    "owner": "data-team",
    "depends_on_past": False,
    "email_on_failure": False,
    "retries": 1,
    "retry_delay": timedelta(minutes=10),
}

with DAG(
    dag_id="monthly_reference_etl",
    description="Monthly reference ETL: extract reference data → ingest → refresh gold layer (dbt)",
    schedule_interval="0 6 1 * *",  # iga kuu 1. kuupäev kell 06:00
    start_date=datetime(2025, 1, 1),
    catchup=False,
    default_args=default_args,
    tags=["monthly", "orchestration"],
) as dag:
    base_env = {**os.environ, "DATA_DIR": DATA_DIR}

    # --- Extract tasks ---
    extract_exchanges = BashOperator(
        task_id="extract_exchange_information",
        bash_command=f"python {SCRIPTS_DIR}/monthly_extract_exchange_information.py",
        env=base_env,
    )

    extract_company_overview = BashOperator(
        task_id="extract_company_overview",
        bash_command=f"python {SCRIPTS_DIR}/monthly_extract_company_overview.py",
        env=base_env,
    )


    # --- Ingest task ---
    ingest_monthly_data = BashOperator(
        task_id="ingest_monthly_data",
        bash_command=f"python {SCRIPTS_DIR}/ingest_monthly_data.py",
        env=base_env,
    )

    # --- dbt core models (incremental silver layer) ---
    dbt_run_silver = BashOperator(
        task_id="dbt_run_silver",
        bash_command=(
            f"cd {DBT_DIR} && "
            f"dbt run --select tag:silver"
        ),
        env=base_env,
    )

    # --- Refresh gold layer (full refresh) ---
    dbt_refresh_gold = BashOperator(
        task_id="dbt_refresh_gold",
        bash_command=(
            f"cd {DBT_DIR} && "
            f"dbt run --full-refresh --select tag:gold"
        ),
        env=base_env,
    )

    # --- Optional: dbt tests on gold models ---
    dbt_test_gold = BashOperator(
        task_id="dbt_test_gold",
        bash_command=(
            f"cd {DBT_DIR} && "
            f"dbt test --select tag:gold"
        ),
        env=base_env,
    )

    [extract_exchanges, extract_company_overview] >> ingest_monthly_data >> dbt_run_silver >> dbt_refresh_gold >> dbt_test_gold
