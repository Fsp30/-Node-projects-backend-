import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import routes from "./routes";

createConnection().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.listen(3000, () => console.log("Server started on port 3000"));
}).catch(error => console.log(error));
