import { FastifyRequest, FastifyReply } from 'fastify';
import { createUserSchema, updateUserSchema } from '../schemas/userSchema'
import * as userService from '../services/userServices'
import { z } from 'zod';

const idParamSchema = z.object({
  id: z.string().uuid(),
});

export const createUser = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const validatedData = createUserSchema.parse(req.body)
    const user = await userService.createUser(validatedData.name, validatedData.email, validatedData.password)
    reply.send(user)
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao criar usuário', error: error.message })
  }
}
export const updateUser = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const validatedData = updateUserSchema.parse(req.body)
    const user = await userService.updateUser(validatedData.id, validatedData)
    reply.send(user)
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao atualizar o usuário', error: error.message })
  }
}


export const getAllUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const users = await userService.getAllUsers();
    reply.send(users)
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao buscar usuários', error: error.message })
  }
}

export const getUserById = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = idParamSchema.parse(req.params);
    const user = await userService.getUsersById(id);
    if (!user) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(user)
    }
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao buscar usuário', error: error.message })
  }
}


export const deleteUser = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = idParamSchema.parse(req.params);
    const deleted = await userService.deleteUser(id);
    if (!deleted) {
      reply.status(404).send({ message: 'Usuário não encontrado para exclusão' })
    } else {
      reply.status(200).send({ message: 'Usuário deletado com sucesso' })
    }
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao deletar usuário', error: error.message })
  }
}
