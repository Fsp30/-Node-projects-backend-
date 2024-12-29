import { Router } from "express"
import itemRoutes from "./src/routes/itemRoutes"
import userRoutes from "./src/routes/userRoutes"

const routes = Router()

routes.use("/items", itemRoutes)
routes.use("/users", userRoutes)

export default routes
