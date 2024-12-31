import fastify from "fastify";
import dotenv from "dotenv";
import { setupRoutes } from "./routes";
import prisma from "./database";

dotenv.config();

const app = fastify({ logger: true });

setupRoutes(app);

app.listen({ port: 7500 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta ${address}`);
});
