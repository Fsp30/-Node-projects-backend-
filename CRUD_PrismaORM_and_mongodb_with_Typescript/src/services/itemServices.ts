import { prisma } from "../prisma"
import { generateId } from "../utils/idGenerate"

export const createItem = async (name:string, description:string, userId:string) => {
    return prisma.item.create({
        data:{
            id: generateId(),
            name,
            description,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    })
}

export const updateItem = async (id: string, data: Partial<{ name: string; description: string }>) => {
    const existingItem = await prisma.item.findUnique({ where: { id } });
    if (!existingItem) throw new Error('Item not found');
  
    return prisma.item.update({
      where: { id },
      data: {
        name: data.name || existingItem.name,
        description: data.description || existingItem.description,
      },
    })
}

export const getAllItens = async () =>{
    return prisma.item.findMany()
}
export const getitemById = async (id:string) =>{
    return prisma.item.findUnique({
        where: {id}
    })
}
export const deleteItem = async (id:string) =>{
    return prisma.item.delete({
        where: {id}
        
    })
}