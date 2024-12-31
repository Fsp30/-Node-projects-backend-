# Inventory Management System

## Overview
This is a multi-user inventory management system built with TypeScript, Fastify, and PostgreSQL. It supports role-based user management, JWT authentication, and product inventory tracking. The project uses Prisma as the ORM and Zod for schema validation.

## Features
- User registration and login with role-based access (Admin and User).
- JWT authentication for secure API access.
- Product inventory management (create, read, update, delete products).
- Inventory logs for tracking additions and removals.
- Validation with Zod.
- PostgreSQL database management with Prisma.

## Project Structure
```
project/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── inventoryController.ts
│   │   ├── productController.ts
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   ├── prisma/
│   │   └── index.ts
│   ├── routes/
│   │   └── index.ts
│   ├── schemas/
│   │   ├── productSchema.ts
│   │   └── userSchema.ts
│   ├── utils/
│   │   └── jwt.ts
│   └── index.ts
├── prisma/
│   ├── schema.prisma
├── .env
├── package.json
├── tsconfig.json
```

## Installation

### Prerequisites
- Node.js
- Docker
- PostgreSQL (via Docker container)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/inventory-management.git
   cd inventory-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```plaintext
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/yourdatabase
   JWT_SECRET=yourjwtsecret
   ```

4. Start PostgreSQL with Docker:
   ```bash
   docker run --name inventory-db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
   ```

5. Initialize Prisma:
   ```bash
   npx prisma init
   npx prisma migrate dev --name init
   npx prisma generate
   ```

6. Start the server:
   ```bash
   npm run dev
   ```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Auth
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login to obtain a JWT.

### Products
- `GET /products`: List all products.
- `POST /products`: Create a new product (Admin only).
- `PUT /products/:id`: Update a product (Admin only).
- `DELETE /products/:id`: Delete a product (Admin only).

### Inventory
- `POST /inventory/add`: Add inventory to a product (Admin only).
- `POST /inventory/remove`: Remove inventory from a product (Admin only).
- `GET /inventory/logs`: View inventory logs.

## Technologies Used
- **Fastify**: Backend framework for API development.
- **TypeScript**: Strongly-typed JavaScript.
- **PostgreSQL**: Relational database management.
- **Prisma**: ORM for database interactions.
- **Zod**: Schema validation library.
- **Docker**: Containerization for PostgreSQL.

## Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project.
- `npm run start`: Start the production server.
- `npm run prisma`: Run Prisma commands.

## Contributing
Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.

