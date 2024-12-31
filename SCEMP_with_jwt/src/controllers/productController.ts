import { FastifyRequest, FastifyReply } from "fastify"
import prisma from "../database"
import { productSchema } from "../schemas/productSchema"

export const createProduct = async(req:FastifyRequest, res:FastifyReply) => {
    try{
        const {name, description, quantity, category} = productSchema.parse(req.body)
        const product = await prisma.product.create({
            data:{
                name,
                description,
                quantity,
                category
            }
        })
        res.status(201).send({product})
    }catch{
        res.status(400).send({ message: 'Erro ao criar Produto' })
    }
}

export const listProducts = async (req:FastifyRequest, res:FastifyReply) =>{
    try{
        const products = await prisma.product.findMany()
        res.send({products})
    }catch{
        res.status(400).send({message: "Erro ao listar produtos"})
    }
}

export const updateProduct = async (req:FastifyRequest, res:FastifyReply) =>{
    try{
        const {id} = req.params as {id:string}
        const {name, description, quantity, category} = productSchema.partial().parse(req.body)
    
        const product = await prisma.product.update({
            where:{id},
            data:{
                name,
                description,
                quantity,
                category
            }
        })
        res.status(200).send({message: "Produto atualizado com sucesso (AMEM)"})
    }catch{
        res.status(400).send({message: "Erro ao atualizar produto"})
    }
}


export const deleteProduct = async (req:FastifyRequest, res:FastifyReply) =>{
    try{
        const {id} = req.params as {id:string}
        await prisma.product.delete({where:{id}})
        res.status(200).send({message: "Produto deletado com sucesso"})
    }catch{
        res.status(400).send({message: "Erro ao deletar produto"})
    }
}