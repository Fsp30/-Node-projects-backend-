import { Router } from "express"
import { UserService } from "../services/UserService"
import { User } from "../models/User"

const userService = new UserService()
const router = Router()


router.post("/", async (req, res) => {
  try {
    const userData = req.body as Partial<User>;
    const user = await userService.create(userData)
    res.status(201).send(user)
  } catch {
    res.status(400)
  }
})

router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllItems()
    res.send(users)
  } catch (error) {
    res.status(400).send()
  }
})

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.findById(userId)
    if (user) {
      res.send(user)
    } else {
      res.status(404).send({ message: "User not found" })
    }
  } catch {
    res.status(400).send()
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body as Partial<User>;
    const updatedUser = await userService.update(userId, userData)
    res.send(updatedUser)
  } catch (error) {
    res.status(400).send()
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.delete(userId)
    res.status(204).send()
  } catch  {
    res.status(400).send()
  }
})

export default router
