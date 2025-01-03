import { Router } from "express"
import {create,remove,list,update} from "../controller/taskController"
import { authMiddleware } from "../middlewares/authMiddleawares"

const router = Router()

router.use(authMiddleware)

router.get("/",  list)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", remove)

export default router
