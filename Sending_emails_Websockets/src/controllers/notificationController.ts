import {Request, Response} from 'express'
import {createNotification, getUserNotifications} from '../services/notificationService'

export const getNotification = async (req:Request,res: Response) =>{
    const {userId} = req.body
    try{
        const notifications = await getUserNotifications((userId))
        res.status(200).json({notifications})
    }catch{
        res.status(400).json({erro:"Ocorreu um erro inexperado"})
    }
}

export const CreateNotification = async (req:Request, res:Response)=>{
    const {message, userId} = req.body
    try{
        const notifications = await createNotification(userId, message)
        res.status(203).json({notifications})
    }catch{
        res.status(400).json({erro: "Falha ao enviar notificação"})
    }
}