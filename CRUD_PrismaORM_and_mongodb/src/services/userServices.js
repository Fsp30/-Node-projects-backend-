import prisma from '../prisma/client'

export const createUser = async (userData) =>{
    return await prisma.user.create({
        data: userData
    })
}
export const getAllUsers = async () =>{
    return await prisma.user.findMany()
}
export const getUserById = async (id) =>{
    return await prisma.user.findUnique({
        where: {id}
    })
}
export const updateUser = async (id, userData) => {
    return await prisma.user.update({
        wehre: {id},
        data: userData
    })
}
export const deleteUser = async (id) =>{
    return await prisma.user.delete({
        where: {id}
    })
}

