import { FastifyRequest, FastifyReply } from "fastify"
import prisma from "../database"

export const addInventory = async (req:FastifyRequest, res:FastifyReply) =>{
    try{
        const { productId, quantity } = req.body as {productId: string, quantity: number}
        const {user} = req as any
        const product = await prisma.product.update({
            where: {id: productId},
            data: {quantity: {increment: quantity}},
        })
        await prisma.inventoryLog.create({
            data:{
                action: "ADD",
                quantity,
                productId,
                userId: user.id,
            }
        })
        res.status(200).send({product})
    }catch{
        res.status(400).send({message: "Erro ao utilizar do inventário"})
    }
}

export const removeInventory = async (req: FastifyRequest, res: FastifyReply) =>{
    try{
        const {productId, quantity} = req.body as {productId: string, quantity: number}
        const {user} = req as any
        const product = await prisma.product.update({
            where: {id: productId},
            data:{quantity: {increment:quantity}}
        })
        await prisma.inventoryLog.create({
            data:{
                action: "REMOVE",
                quantity,
                productId,
                userId: user.id,
            }
        })
        res.status(200).send({product})
    }catch{
        res.status(400).send({message: "Erro ao utilizar do inventário"})
    }
}

export const listInventoryLogs = async (req: FastifyRequest, res: FastifyReply) =>{
    try{
        const logs = prisma.inventoryLog.findMany({
            include: {user: true, product:true}
        })
        res.status(200).send(logs)
    }catch{
        res.status(400).send({message: "Erro ao listar logs de inventário"})
    }
}