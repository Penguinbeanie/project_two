#!/bin/bash
set -e

echo "=== Starting Airflow Initialization ==="

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h postgres -U airflow -d airflow; do
  echo "PostgreSQL is not ready yet. Retrying in 2 seconds..."
  sleep 2
done

echo "PostgreSQL is ready!"

# Always initialize the database to ensure it's fresh and clean
echo "Initializing Airflow database..."
airflow db init

# Create admin user (will fail if exists, but that's ok)
echo "Creating default admin user..."
airflow users create \
    --username admin \
    --password admin \
    --firstname Admin \
    --lastname User \
    --role Admin \
    --email admin@example.com || true

echo "Airflow initialization complete!"
echo "=== Airflow Initialization Finished ==="
