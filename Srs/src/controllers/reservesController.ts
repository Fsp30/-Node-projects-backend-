import { prisma } from '../database'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

export async function createReserve(req:Request,res: Response) {
    const {userId, roomId } = req.params
    const {startTime, endTime, status} = req.body
    const id = uuid()

    try{
        const reserve = await prisma.reservation.create({
            data:{
                id,
                userId,
                roomId,
                startTime,
                endTime,
                status
            }

        })
        res.status(201).json({ message: "Reserva criada com sucesso!", reserve })
    }catch{
        res.status(400).json({erro: "Falha ao criar reserva"})
    }
}

export async function getReserve(req: Request, res: Response){
    const {id} = req.params
    try{
        const reserve = await prisma.reservation.findUnique({
            where:{id}
        })
        res.status(200).json({reserve})
    }catch{
        res.status(400).json({erro: "Erro ao encontrar reserva"})
    }
}

export async function getReserves(req: Request, res: Response){
    const reserves = await prisma.reservation.findMany()
    res.status(200).json({reserves})
}

export async function updateReserve(req:Request, res:Response){
    const {id, userId, roomId} = req.params
    const data: Partial<{startTime: string, endTime:string, status: string}> = req.body
    try{
        const existingReserve = await prisma.reservation.findUnique({where:{id}})
        if(!existingReserve) return res.status(400).json({error: "Reserva não encontrada"})
        const updatedReserve = await prisma.reservation.update({
            where: {id},
            data:{
                userId,
                roomId,
                startTime: data.startTime || existingReserve.startTime,
                endTime: data.endTime || existingReserve.endTime,
                status: data.status || existingReserve.status
            }
        })
        res.status(204).json({message: "Reserva atualizada", updatedReserve})
    }catch{
        res.status(400).json({erro: 'Erro ao atualizar reserva'})
    }
}

export async function deleteReserve(req: Request, res: Response){
    const {id} = req.params
    try{
        await prisma.reservation.delete({ where: {id}})
        res.status(205).json({message: 'Reserva deletada com sucesso'})
    }catch{
        res.status(400).json({erro: "Falha ao deletar reserva"})
    }
}