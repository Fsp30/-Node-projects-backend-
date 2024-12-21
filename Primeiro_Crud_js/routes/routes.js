import express from 'express'
const {createUser, getUsers, updateUser, deleteUser} = require('../controller/UserController')

const router = express.Router()

router.post('/',createUser)
router.get('/', getUsers)
router.put('/:id', updateUser )
router.delete('/:id', deleteUser)