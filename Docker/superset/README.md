## Docker Networks

This `docker-compose.yml` configuration utilizes two distinct networks for managing communication between services:

*   **`superset_internal`**: This is an internal, user-defined bridge network created by Docker Compose. It facilitates secure communication between core Superset components such as `redis`, `db`, `superset`, `superset-init`, `superset-worker`, and `superset-worker-beat`. Services within this network can communicate with each other using their service names.

*   **`shared-analytics-net`**: This is an external network, meaning it is expected to be pre-existing in your Docker environment (e.g., created manually or by another `docker-compose` setup). It is used to connect Superset's web application (`superset`), the initialization process (`superset-init`), and the celery workers (`superset-worker` and `superset-worker-beat`) to a broader analytics infrastructure. This allows Superset to interact with other analytical tools or data sources without exposing all its internal components directly.

To manage these networks, especially `shared-analytics-net`, ensure it is created before running this `docker-compose` file if it doesn't exist:

```bash
docker network create shared-analytics-net
```

## Startup

First ensure that the network has been created (see above).
Then ensure that the docker/compose.yml has been ran and both DAGs were activated once (sequentially, first let the "daily_market_etl" finish before starting the second DAG).

Then, to start the services, navigate to the directory containing `superset_compose.yml` (`superset/`) and run:

```bash
docker compose -f superset_compose.yml up -d
```

Open http://localhost:8088 and enter the username: "admin" and password: "admin".

(Optional) To connect Apache Superset to the Clickhouse database, use the following URI:

    "clickhousedb://default:default@clickhouse:8123/sp600_stocks"

To load the existing dashboard, click on "Dashboard", then on "Import Dashboards". Use the .zip found at:

    "Docker/superset/dashboards/dashboard_export_20251126T225307.zip"

When asked for the password, enter: "default"

## Screenshot

![Dashboard](https://github.com/Penguinbeanie/project_two/blob/master/Docker/superset/dashboards/img.png)

