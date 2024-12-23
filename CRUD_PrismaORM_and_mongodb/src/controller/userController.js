import {generateId, generatePassword} from '../utils/cryptoUtils'
import * as userService from '../services/userServices'

export const createUser = async (req,res) =>{
    const {name, email} = req.body
    const id = generateId()
    const password = generatePassword()
    try{
        const user = await userService.createUser({id,name,email,password})
        res.status(201).json(user)
    } catch {
        res.status(400).json({message: 'Falha ao criar Usuário'})
    }
}

export const getAllUsers = async (res,req) =>{
    try{
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    }catch{
        res.status(500).json({messsage: 'Error ao listar Usuários'})
    }
}

export const getUserById = async (req,res) =>{
    const {id} = req.params.id
    try{
        const user = await userService.getUserById(id)
        if(!user) return res.status(404).json({message: 'Usuário não encontrado'})
        res.status(200).json(user)
    } catch{
        res.status(404).json({message: 'Falha ao buscar Usuário'})
    }
}

export const updateUser = async (req,res) =>{
    const {id} = req.params.id
    const {name,email} = req.body
    try{
        const existingUser = await userService.getUserById(id)
        if(!existingUser) return res.status(404).json({message: 'Usuário não encontrado'})
        const updateData = {
            name: name || existingUser.name,
            email: email || existingUser.email
        }
        const updateUser = await userService.updateUser(id, updateData)
        res.status(200).json(updateUser)
    }catch{
        res.status(402).json({message: 'Falah ao atualizar o Usuário'})
    }
}

export const deleteUser = async (req,res) =>{
    const {id} = req.params
    try{
        await userService.deleteUser(id)
        res.status(204).send()
    }catch{
        res.status(405).json({message: "Falha ao deletar Usuário"})
    }
}








// Te amo Mari