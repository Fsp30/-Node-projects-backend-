import {Request, Response} from 'express'
import {ItemService} from '../services/ItemService'

const itemService = new ItemService()

export const createItem = async(req:Request, res:Response) =>{
    try{
        const newItem = await itemService.create(req.body)
        res.status(201).send({message:"Itém criado com sucesso!"})
    }catch{
        res.status(404).send("Falha na criação de Itém😭")
    }
}

export const getAllIetms = async(req:Request, res:Response) =>{
    try{
        const items = await itemService.getAllItems()
        res.status(200).send(items)
    }catch{
        res.status(404).send({message: "Erro ao buscar os iténs"})
    }
}
export const findById = async (req:Request, res:Response) =>{
    try{
        const {id} = req.params
        const item = await itemService.findById(id)
        if(!item){
            res.status(404).send({ message: 'Item não encontrado' })
        } else {
           res.send(item)
        }
    }catch {
        res.status(400).send({ message: 'Erro ao buscar item'})
    }
 }
export const updateItem = async (req:Request, res:Response) =>{
    try {
        const item = await itemService.update(req.params.id, req.body)
        if (!item) {
          res.status(404).send({ message: 'Item não encontrado para atualização' })
        } else {
          res.send(item)
        }
      } catch  {
        res.status(400).send({ message: 'Erro ao atualizar item' })
      }
}
export const deleteItem = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await itemService.delete(id)
  
      const itemExists = await itemService.findById(id)
      if (itemExists) {
        return res.status(404).send({ message: "Item não encontrado" });
      } else {
        return res.status(200).send({ message: "🗑️👍" });
      }
    } catch  {
      return res.status(400).send({ message: "Erro ao deletar item"})
    }
  }
  