# Room Reservation System

This is a simple room reservation system built with TypeScript, Express, Prisma, and Swagger for API documentation. The system allows users to manage rooms, users, and reservations.

## Features

- CRUD operations for rooms, users, and reservations.
- API documentation with Swagger.
- TypeScript support for type safety and better development experience.
- Prisma as the ORM for managing the PostgreSQL database.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Fsp30/-Node-projects-backend-.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Srs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the Prisma configuration:

    - Create a `.env` file in the root directory and add your PostgreSQL connection string:

      ```env
      DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
      ```

    - Run the Prisma commands to set up the database schema:

      ```bash
      npx prisma migrate dev --name init
      npx prisma generate
      ```

## Running the Application

1. Build the TypeScript code:

    ```bash
    npm run build
    ```

2. Start the application:

    ```bash
    npm start
    ```

3. For development, you can run the application with hot reload:

    ```bash
    npm run dev
    ```

4. Access the API documentation at `http://localhost:3000/api-docs`.

## API Endpoints

- **Rooms**
  - `GET /rooms`: List all rooms.
  - `POST /rooms`: Create a new room.
  - `PUT /rooms/:id`: Update a room.
  - `DELETE /rooms/:id`: Delete a room.

- **Users**
  - `GET /users`: List all users.
  - `POST /users`: Create a new user.
  - `PUT /users/:id`: Update a user.
  - `DELETE /users/:id`: Delete a user.

- **Reservations**
  - `GET /reservations`: List all reservations.
  - `POST /reservations`: Create a new reservation.
  - `PUT /reservations/:id`: Update a reservation.
  - `DELETE /reservations/:id`: Delete a reservation.

## Documentation

API documentation is available via Swagger. Once the application is running, you can access it at:

