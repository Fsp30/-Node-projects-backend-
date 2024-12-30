import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Category } from "../entity/Category"

export class CategoryController {
  static async create(req: Request, res: Response) {
    const { name } = req.body
    const categoryRepo = getRepository(Category)

    const category = categoryRepo.create({ name })
    await categoryRepo.save(category)

    return res.status(201).json(category)
  }

  static async getAll(req: Request, res: Response) {
    const categoryRepo = getRepository(Category)
    const categories = await categoryRepo.find()

    return res.json(categories)
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body
    const categoryRepo = getRepository(Category)
    await categoryRepo.update(id, { name })
    const updatedCategory = await categoryRepo.findOne(id)

    return res.json(updatedCategory)
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params
    const categoryRepo = getRepository(Category)

    await categoryRepo.delete(id)
    return res.status(204).send()
  }
}
