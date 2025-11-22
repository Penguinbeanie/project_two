def ingest_iceberg_daily_isolated():
    import os
    import pandas as pd
    import pyarrow as pa
    from pyiceberg.catalog import load_catalog
    from pyiceberg.schema import Schema, NestedField
    from pyiceberg.types import (
        DateType, StringType, DoubleType, LongType, TimestampType
    )
    import s3fs

    s3_endpoint = "http://minio:9000"
    s3_access = "minioadmin"
    s3_secret = "minioadmin"
    bucket_name = "iceberg-bronze"

    fs = s3fs.S3FileSystem(
        client_kwargs={'endpoint_url': s3_endpoint},
        key=s3_access,
        secret=s3_secret
    )
    try:
        if not fs.exists(bucket_name):
            fs.mkdir(bucket_name)
            print(f"✔ Created bucket: {bucket_name}")
        else:
            print(f"✔ Bucket {bucket_name} exists")
    except Exception as e:
        print(f"Warning during bucket check: {e}")
    catalog_config = {
        "uri": "http://iceberg_rest:8181",
        "s3.endpoint": "http://minio:9000",
        "s3.access-key-id": "minioadmin",
        "s3.secret-access-key": "minioadmin",
        "warehouse": "s3://iceberg-bronze",
    }

    catalog = load_catalog("rest", **catalog_config)
    DATA_DIR = "/opt/airflow/data/daily"
    try:
        namespaces = [x[0] for x in catalog.list_namespaces()]
        if "default" not in namespaces:
            catalog.create_namespace("default")
    except Exception as e:
        print(f"Namespace check warning: {e}")
        try: catalog.create_namespace("default")
        except: pass

    schema = Schema(
        NestedField(1, "date", DateType(), required=False),
        NestedField(2, "ticker", StringType(), required=False),
        NestedField(3, "open", DoubleType(), required=False),
        NestedField(4, "high", DoubleType(), required=False),
        NestedField(5, "low", DoubleType(), required=False),
        NestedField(6, "close", DoubleType(), required=False),
        NestedField(7, "volume", LongType(), required=False),
        NestedField(8, "ingestion_timestamp", TimestampType(), required=False),
    )

    try:
        table = catalog.load_table("default.stock_bronze")
        print("Table loaded successfully.")
    except Exception:
        print("Table not found, creating...")
        table = catalog.create_table(
            identifier="default.stock_bronze",
            schema=schema,
        )

    print("Iceberg table location:", table.location())
    try:
        files = [f for f in os.listdir(DATA_DIR) if f.endswith("_daily_stock_data.csv")]
        files.sort()

        if not files:
            print("No CSV files found. Skipping.")
            return

        target_file = os.path.join(DATA_DIR, files[-1])
        print(f"Processing file: {target_file}")
        df = pd.read_csv(target_file)
    except FileNotFoundError:
        print(f"Directory {DATA_DIR} not found.")
        raise

    bronze_df = df.rename(columns={
        "Date": "date",
        "Ticker": "ticker",
        "Open": "open",
        "High": "high",
        "Low": "low",
        "Close": "close",
        "Volume": "volume",
    })
    bronze_df["date"] = pd.to_datetime(bronze_df["date"]).dt.date
    bronze_df["ingestion_timestamp"] = pd.Timestamp.utcnow().replace(tzinfo=None)
    expected_cols = [
        "date", "ticker", "open", "high", "low", "close", "volume", "ingestion_timestamp"
    ]
    bronze_df = bronze_df[expected_cols]
    bronze_df["volume"] = pd.to_numeric(bronze_df["volume"], errors="coerce").fillna(0).astype("int64")
    pa_table = pa.Table.from_pandas(bronze_df)
    table.append(pa_table)
    print(f"✔ appended {len(bronze_df)} rows to default.stock_bronze")