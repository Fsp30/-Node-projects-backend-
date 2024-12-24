import {prisma} from '../prisma'
import { generateId } from '../utils/idGenerate'
import { hashPassword } from '../utils/hashUtil'

export const createUser = async (name:string, email:string, password:string )=>{
    return prisma.user.create({
        data: {
            id: generateId(),
            name,
            email,
            password: hashPassword(password),
        }
    })
}

export const updateUser = async (id: string, data: Partial<{ name: string; email: string; password: string }>) => {
    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) throw new Error('Usuário não encontrado');
  
    return prisma.user.update({
      where: { id },
      data: {
        name: data.name || existingUser.name,
        email: data.email || existingUser.email,
        password: data.password ? hashPassword(data.password) : existingUser.password,
      }
    })
  }

export const getAllUsers = async () =>{
    prisma.user.findMany()
} 
export const getUsersById = async (id: string) =>{
    prisma.user.findUnique({
        where: {id}
    })
}
export const deleteUser = async (id:string) =>{
    prisma.user.delete({
        where: {id}
    })
}