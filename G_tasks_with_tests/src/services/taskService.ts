import {prisma} from '../imports/prismaClient'

export async function createTask(userId:string, data: any): Promise<object> {
    return await prisma.task.create({
        data:{
            ...data,
            userId
        }
    })
}

export async function GetTasksByUserId(userId:string): Promise<object[]> {
    return await prisma.task.findMany({
        where:{
            userId
        }
    })
}

export async function updateTask(userId:string, id:string, data:any):Promise<object | null>{
    const task = await prisma.task.findUnique({
        where:{
            id
        }
    })

    if(task?.userId !== userId) return null
    return await prisma.task.update({
        where:{
            id
        }, data
    })
}

export async function deleteTask(id: string, userId:string): Promise<object | null>{
    const task = await prisma.task.findUnique({
        where:{
            id
        }
    })
    if(task?.userId !== userId) return null
    return await prisma.task.delete({
        where:{
            id
        }
    })
}