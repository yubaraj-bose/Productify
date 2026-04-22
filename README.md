# Productify

Productify is a platform where creators can share and discover products.

## Prerequisites

Before starting, ensure you have set up the `.env` files in both the `frontend` and `backend` directories with the necessary environment variables (like Clerk keys and database URLs).

## Running Without Docker

If you prefer to run the application locally without Docker, follow these steps:

### 1. Start the Backend

Open a terminal window and navigate to the backend directory:

```sh
cd backend
npm install
npm run dev
```

This will start the backend server on its designated port.

### 2. Start the Frontend

Open a new terminal window and navigate to the frontend directory:

```sh
cd frontend
npm install
npm run dev
```

The frontend application will start and provide a local URL to view the app in your browser.

## Running With Docker

If you prefer to use Docker to run the entire stack (including the database and both services), it's much simpler:

1. Ensure Docker Desktop is running on your machine.
2. Open a terminal in the root directory of the project (where the `docker-compose.yml` file is located).
3. Run the following command:

```sh
docker-compose up --build
```

This will build the images and start all the containers. You can stop the services anytime by pressing `Ctrl+C` or running `docker-compose down`.
