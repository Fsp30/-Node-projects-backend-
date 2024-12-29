import { BaseService } from "./BaseServices"
import prisma from "../database/prismaClient"
import { IdUtil } from "../utils/IdUtil"
import { Item } from "../models/Items"


export class ItemService extends BaseService<Item>{
    async create(data: Partial<Item>): Promise<Item> {
        const id = IdUtil.generateUUID()
        if(!data.name){
            throw new Error("Cade o Nome???") 
        }
        if(!data.userId){
            throw new Error("Cade o Id do dono, cade???") 
        }
        return await prisma.item.create({
            data: {
                id, 
                name: data.name,
                userId: data.userId, 
            },
        });
    }
    async getAllItems(): Promise<Item[]> {
        return await prisma.item.findMany()
    }
    async findById(id: string): Promise<Item | null> {
        return await prisma.item.findUnique({where: {id}})
    }
    async update(id:string, data:Partial<Item>):Promise<Item>{
        return await prisma.item.update({
            where: {id},
            data
        })
    }
    async delete(id:string):Promise<void>{
        await prisma.item.delete({where: {id}})
    }
}