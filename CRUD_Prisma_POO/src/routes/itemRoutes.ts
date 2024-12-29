import { Router } from "express";
import { ItemService } from "../services/ItemService"
import { Item } from "../services/ItemService"

const itemService = new ItemService();
const router = Router();

router.post("/", async (req, res) => {
  try {
    const itemData = req.body as Partial<Item>
    const item = await itemService.create(itemData)
    res.status(201).send(item)
  } catch  {
    res.status(400)
  }
});

// Encontrar todos os itens
router.get("/", async (req, res) => {
  try {
    const items = await itemService.getAllItems()
    res.send(items);
  } catch  {
    res.status(400)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.findById(itemId)
    if (item) {
      res.send(item)
    } else {
      res.status(404)
    }
  } catch {
    res.status(400)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const itemId = req.params.id
    const itemData = req.body as Partial<Item>
    const updatedItem = await itemService.update(itemId, itemData)
    res.send(updatedItem)
  } catch{
    res.status(400)
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id
    await itemService.delete(itemId)
    res.status(204)
  } catch  {
    res.status(400)
  }
})

export default router
