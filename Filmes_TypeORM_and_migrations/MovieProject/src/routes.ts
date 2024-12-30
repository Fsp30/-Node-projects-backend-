import { Router } from "express"
import { MovieController } from "./controller/MovieController"
import { CategoryController } from "./controller/CategoryController"

const routes = Router()

routes.post("/movies", MovieController.create)
routes.get("/movies", MovieController.getAll)
routes.get("/movies/search", MovieController.search)
routes.put("/movies/:id", MovieController.update)
routes.delete("/movies/:id", MovieController.delete)

routes.post("/categories", CategoryController.create)
routes.get("/categories", CategoryController.getAll)
routes.put("/categories/:id", CategoryController.update)
routes.delete("/categories/:id", CategoryController.delete)

export default routes
