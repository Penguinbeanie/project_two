## Docker Compose Services Overview

This `docker-compose.yml` file defines several services that work together to run Apache Superset:

*   **`nginx`**: A reverse proxy that routes external requests to the Superset web application. It handles incoming traffic and forwards it to the `superset` service.
*   **`redis`**: A Redis instance used for caching and as a message broker for Celery tasks, improving Superset's performance and enabling asynchronous operations.
*   **`db`**: A PostgreSQL database that serves as Superset's metadata repository, storing information about users, dashboards, charts, and data sources. It initializes data from scripts in `./docker/docker-entrypoint-initdb.d`.
*   **`superset`**: The core Superset web application, running on Gunicorn. This is the primary service providing the Superset user interface and API.
*   **`superset-websocket`**: A separate service for handling WebSocket communication within Superset, typically used for real-time updates.
*   **`superset-init`**: This crucial service runs once during startup to initialize the Superset environment. It performs database migrations, creates an admin user, loads example data, and is responsible for **importing specified dashboards** (e.g., from the `./data_engineering_dashboard` volume mount). This service must complete successfully before other Superset components become fully operational.
*   **`superset-node`**: Used for frontend development, compiling and serving the Superset UI.
*   **`superset-worker`**: A Celery worker process that executes asynchronous and resource-intensive tasks, such as running long-running queries, generating reports, and performing data extracts.
*   **`superset-worker-beat`**: The Celery Beat scheduler, responsible for triggering periodic tasks (e.g., scheduled reports, data refreshes) for the Celery workers.
*   **`superset-tests-worker`**: An optional worker service specifically configured for running tests.

### Dashboard Import During Initialization:

The `superset-init` service plays a critical role in setting up your Superset instance. Its command, typically executing `/app/docker/docker-init.sh`, ensures that the database is properly migrated, an admin user is created, and any pre-configured dashboards or example datasets are imported. Notably, the volume mount `./data_engineering_dashboard:/app/data_engineering_dashboard` indicates that dashboards or other configuration files placed in your local `data_engineering_dashboard` directory will be available within the container at `/app/data_engineering_dashboard` and can be imported during this initialization step. This automates the setup of your analytical views and provides a consistent starting point for your Superset deployment.

## Docker Networks

This `docker-compose.yml` configuration utilizes two distinct networks for managing communication between services:

*   **`superset_internal`**: This is an internal, user-defined bridge network created by Docker Compose. It facilitates secure communication between core Superset components such as `redis`, `db`, `superset`, `superset-websocket`, `superset-init`, `superset-node`, `superset-worker`, `superset-worker-beat`, and `superset-tests-worker`. Services within this network can communicate with each other using their service names.

*   **`shared-analytics-net`**: This is an external network, meaning it is expected to be pre-existing in your Docker environment (e.g., created manually or by another `docker-compose` setup). It is used to connect Superset's `nginx` reverse proxy, `superset` web application, `superset-init` process, and `superset-worker` and `superset-worker-beat` to a broader analytics infrastructure. This allows Superset to interact with other analytical tools or data sources without exposing all its internal components directly. The `nginx` service acts as an entry point, connecting to this external network and routing requests internally to Superset.

To manage these networks, especially `shared-analytics-net`, ensure it is created before running this `docker-compose` file if it doesn't exist:

```bash
docker network create shared-analytics-net
```

## Startup

First ensure that the network has been created (see above).
Then ensure that the docker/compose.yml has been ran and the DAGs were activated once.

Then, to start the services, navigate to the directory containing `docker-compose.yml` (e.g., `superset/`) and run:

```bash
docker-compose up -d
```

To connect Apache Superset to the Clickhouse database, use the following URI:

  clickhousedb://default:default@clickhouse:8123/sp600_stocks
