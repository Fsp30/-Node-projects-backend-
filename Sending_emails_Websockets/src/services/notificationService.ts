import {prisma} from '../prisma'
import {sendEmail} from './emailServices'

export const getUserNotifications = async(userId:number)=>{
    return await prisma.notification.findMany({
        where:{userId}
    })
}

export const createNotification = async  (userId: number, message: string)=>{
    const notification = await prisma.notification.create({
        data:{
            userId,
            message
        }
    })
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if(user){ await sendEmail(user.email, 'Nova notificação', message)}
    return notification
}