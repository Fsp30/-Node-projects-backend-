import { FastifyInstance } from "fastify"
import * as userController from '../controllers/userController'

export default async (app:FastifyInstance) =>{
    app.post('/', userController.createUser)
    app.get('/', userController.getAllUsers)
    app.get('/:id', userController.getUserById)
    app.put('/:id', userController.updateUser)
    app.delete('/:id', userController.deleteUser)
}