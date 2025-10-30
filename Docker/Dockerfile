FROM apache/airflow:2.7.3-python3.11

USER root
RUN rm -f /etc/apt/sources.list.d/mariadb.list || true
RUN apt-get update
RUN apt-get install -y gcc python3-dev git

USER airflow
RUN pip install --no-cache-dir clickhouse-driver clickhouse-connect

RUN pip install --no-cache-dir dbt-core dbt-clickhouse yfinance pandas sqlalchemy python-dotenv
