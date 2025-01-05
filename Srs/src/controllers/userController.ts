import { prisma } from "../database"
import { Request,Response } from "express"
import {v4 as uuid} from 'uuid'


export async function createUser(req:Request, res:Response){
    const {name,email } = req.body
    const id = uuid()
    try{
        const user = await prisma.user.create({
            data:{
                id: id,
                name,
                email
            }
        })
        res.status(201).json({message: "Usuário criado com sucesso", user})
    }catch{
        res.status(400).json({erro: "Falha ao criar usuário"})
    }
}

export async function getUsers(req: Request, res:Response){
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }catch{
        res.status(400).json({erro: "Falha ao buscar usuários"})
    }
}

export async function getUser(req:Request, res:Response){
    const {id} = req.params
    try{
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        })
        res.status(200).json({user: user})
    }catch{
        res.status(400).json({error: "falha ao buscar Usuário"})
    }
}

export async function updateUser(req:Request, res:Response){
    const {id} = req.params
    const data: Partial<{name: string, email: string}> = req.body
    try{
        const existingUser = await prisma.user.findUnique({where:{id}})
        if(!existingUser) return res.status(400).json({erro: "Usuário não encontrado"})
        const updatedUser = await prisma.user.update({
            where: {id},
            data:{
                name: data.name || existingUser.name,
                email: data.email || existingUser.email,
                createdAt: existingUser.createdAt
            }
        })
        res.status(202).json({message: "Usuário atualizado", updatedUser})
    }catch{
        res.status(400).json({erro: "Falha ao atualizar usuário"})
    }
}


export async function deleteUser(req:Request, res:Response) {
    const {id} = req.params
    try{
        await prisma.user.delete({
            where: {id}
        })
        res.status(204).json({message: "Usuário deletado com sucesso"})
    }catch{
        res.status(400).json({erro: "Falha ao deletar usuário"})
    }
}