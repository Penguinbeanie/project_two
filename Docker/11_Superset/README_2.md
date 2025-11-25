The shell scripts in this project need to have execute permissions to run correctly inside the Docker containers. Run
  the following commands from the 11_Superset directory to ensure all necessary scripts are executable:

   1 chmod +x docker/*.sh
   2 chmod +x docker/docker-entrypoint-initdb.d/*.sh

  You only need to do this once after cloning the repository.

  2. Start the Services

  Once the permissions are set, you can start the environment:

   1 docker compose up -d
