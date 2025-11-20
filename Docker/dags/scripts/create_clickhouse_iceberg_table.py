from clickhouse_driver import Client

def ensure_iceberg_table():
    client = Client(host='clickhouse', database='default')

    client.execute("CREATE DATABASE IF NOT EXISTS iceberg_data")

    client.execute("""
                   CREATE TABLE IF NOT EXISTS iceberg_data.stock_bronze
                   (
                       `date` Nullable(Date),
                       `ticker` Nullable(String),
                       `open` Nullable(Float64),
                       `high` Nullable(Float64),
                       `low` Nullable(Float64),
                       `close` Nullable(Float64),
                       `volume` Nullable(Int64),
                       `ingestion_timestamp` Nullable(DateTime64(6))
                       )
                       ENGINE = Iceberg(
                                           'http://minio:9000/iceberg-bronze/iceberg_data/default/stock_bronze',
                                           'minioadmin',
                                           'minioadmin',
                                           'Parquet'
                                       );
                   """)

    print("✔ ClickHouse is now connected to the Iceberg table in MinIO")

if __name__ == "__main__":
    ensure_iceberg_table()