FROM apache/airflow:2.7.3-python3.11

USER root

# Remove problematic sources and install system dependencies
RUN rm -f /etc/apt/sources.list.d/mariadb.list || true
RUN apt-get update && \
    apt-get install -y curl postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER airflow

# Copy requirements first for better Docker cache utilization
COPY requirements.txt .

# Install pinned versions from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy script with proper ownership and permissions
COPY --chown=airflow:airflow airflow-init.sh /opt/airflow/airflow-init.sh
RUN chmod +x /opt/airflow/airflow-init.sh
