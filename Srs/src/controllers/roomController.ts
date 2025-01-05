import { prisma } from '../database'
import express, { Request, Response, NextFunction } from 'express'
import { v4 as uuid } from 'uuid'
const app = express()
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Algo deu errado' });
  });

export async function createRoom(req: Request, res: Response) {
    const { name, capacity, resources } = req.body
    const id = uuid()
    try {
        await prisma.room.create({
            data: {
                id: id,
                name,
                capacity,
                resources
            }
        })
        res.status(201).json({ message: "Sala criada com sucesso!" })
    } catch {
        res.status(401).json({ error: "Falha ao criar sala" })
    }
}

export async function getRoom(req: Request, res: Response) {
    const room = await prisma.room.findMany()
    if (!room) {
        res.status(401).json({ error: "Falha ao encontrar salas" })
    }
    res.status(200).json({ salas: room })
}

export async function getRoomById(req: Request, res: Response) {
    const { id } = req.params
    try {
        const room = await prisma.room.findUnique({
            where: { id }
        })
        res.status(200).json({ message: room })
    } catch {
        res.status(401).json({ error: 'Falha ao encontrar sala' })
    }
}
export async function updateRoom(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data: Partial<{ name: string, capacity: number, resources: string[] }> = req.body;
  
    try {
      const existingRoom = await prisma.room.findUnique({ where: { id } });
  
      if (!existingRoom) {
        return res.status(404).json({ error: "Sala não encontrada" });
      }
  
      const updatedRoom = await prisma.room.update({
        where: { id },
        data: {
          name: data.name || existingRoom.name,
          capacity: data.capacity || existingRoom.capacity,
          resources: data.resources || existingRoom.resources,
        },
      });
  
      return res.status(200).json(updatedRoom); // Removi a chave 'updatedRoom' para enviar o objeto diretamente
    } catch (error) {
      console.error(error);
      next(error); // Chama o próximo middleware de erro
    }
  }
export async function deleteRoom( req:Request, res: Response){
    const {id} = req.params
    try{
        await prisma.room.delete({
            where:{id}
        })
        res.status(204).json({message: 'Sala deletada com sucesso'})
    }catch{
    res.status(400).json({error: 'Falha ao deletar a sala'})
    }
}
