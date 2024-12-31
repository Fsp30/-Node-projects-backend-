import { FastifyInstance } from "fastify";
import { registerUser, loginUser } from "../controllers/authController";
import { createProduct, listProducts, updateProduct, deleteProduct } from "../controllers/productController";
import { addInventory, removeInventory, listInventoryLogs } from "../controllers/inventoryController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const setupRoutes = (app: FastifyInstance) => {
  app.post("/auth/register", registerUser);
  app.post("/auth/login", loginUser);

  app.get("/products", listProducts);
  app.post("/products", { preHandler: [authMiddleware] }, createProduct);
  app.put("/products/:id", { preHandler: [authMiddleware] }, updateProduct);
  app.delete("/products/:id", { preHandler: [authMiddleware] }, deleteProduct);

  app.post("/inventory/add", { preHandler: [authMiddleware] }, addInventory);
  app.post("/inventory/remove", { preHandler: [authMiddleware] }, removeInventory);
  app.get("/inventory/logs", { preHandler: [authMiddleware] }, listInventoryLogs);
};
