import {uuidv4} from 'uuid'
const v4 = uuidv4
const Users = require('../data/Users')


if (!req.body.name || req.body.name.trim().length === 0) {
    return res.status(400).json({ error: "O campo de nome do Usuário é inválido" })
}
if (!req.body.email || !/\S+@\S+\.\S+/.test(req.body.email)) {
    return res.status(400).json({ error: "O campo de nome do email é inválido" })
}
if (!req.body.age || typeof req.body.age !== 'number' || req.body.age <= 0 || !Number.isInteger(req.body.age)) {
    return res.status(400).json({ error: "O campo idade é obrigatório e deve ser um número inteiro positivo." })
}

const createUser = (req,res) =>{
    const newUser = {
        "name": req.body.name,
        "email": req.body.email,
        "age": req.body.age,
        "id": v4()
    }
    
    Users.push(newUser)
    res.status(201).json({message: "User criado com sucesso", Users:newUser})
}
const getUsers = (res,req) => {
    res.status(200).json(Users)
}

const updateUser = (req, res) => {
    const id = req.params.id
    const userIndex = Users.findIndex(user => user.id === id)

    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuário não encontrado" })
    }

    const updatedUser = {
        ...Users[userIndex],
        name: req.body.name || Users[userIndex].name,
        email: req.body.email || Users[userIndex].email,
        age: req.body.age || Users[userIndex].age
    };

    Users[userIndex] = updatedUser

    res.status(203).json({ message: "Usuário atualizado com sucesso", user: updatedUser })
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    const userIndex = Users.findIndex(user => user.id === id)
    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuário não encontrado" })
    }
    Users.splice(userIndex, 1)
    res.status(204).json({ message: "Usuário deletado com sucesso" })
}

module.exports = { createUser, getUsers, updateUser, deleteUser }