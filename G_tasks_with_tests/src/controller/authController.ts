import {Request, Response} from 'express'
import {registerUser, loginUser} from '../services/authService'
import {userSchema} from '../schema/UserSchema'

export async function register(req:Request, res: Response): Promise<void> {
    const validateUser = userSchema.safeParse(req.body)
    if(!validateUser){
        res.status(402).send({error: "Falha na criação do usuário devido a dados em formato inválido"})
        return 
    }
    const {email, password} = req.body
    try{
        const newUser = await registerUser(email, password)
        res.status(201).send({message: 'Usuário criado com sucesso', newUser})
    }catch{
        res.status(401).json({error:" Falah ao criar usuário"})
    }
}

export async function login(req:Request, res: Response): Promise<void> {
    const {email, password} = req.body
    try{
        const token = await loginUser(email, password)
        if(!token){
            res.status(401).json({erro: "Senha ou email inválidos"})
            return
        }
        res.status(200).json({token})
    }catch{
        res.status(500).json({erro:"Falha ao fazer login"})
    }
}