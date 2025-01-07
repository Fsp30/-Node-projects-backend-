import {Request, Response} from 'express'
import {registerUser, loginUser} from '../services/authServices'

export const register = async (req:Request, res:Response) =>{
    const {email, password} = req.body
    try{
        const user = await registerUser(email, password)
        res.status(201).json({user})
    }catch{
        res.status(400).json({error: 'Falha ao registrar user'})
    }
}

export const login = async (req:Request, res:Response) =>{
    const {email, password} = req.body
    try{
        const token = await loginUser(email, password)
        res.status(200).json({token})
    }catch{
        res.status(400).json({erro:"Falha ao autenticar token"})
    }
}