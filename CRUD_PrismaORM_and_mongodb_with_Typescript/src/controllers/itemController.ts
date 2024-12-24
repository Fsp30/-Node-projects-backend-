import { FastifyRequest, FastifyReply } from 'fastify'
import { createItemSchema, updateItemSchema, idParamSchema } from '../schemas/itemSchema'
import * as itemService from '../services/itemServices'


export const createItem = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const validatedData = createItemSchema.parse(req.body)
    const item = await itemService.createItem(validatedData.name, validatedData.description, validatedData.userId)
    reply.status(201).send(item)
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao criar item'})
  }
}

export const updateItem = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const validatedParams = idParamSchema.parse(req.params);
    const validatedData = updateItemSchema.parse(req.body);

    const item = await itemService.updateItem(validatedParams.id, validatedData);
    if (!item) {
      reply.status(404).send({ message: 'Item não encontrado para atualização' })
    } else {
      reply.send(item)
    }
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao atualizar item', error: error.message })
  }
}

export const getAlItems = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const items = await itemService.getAllItens();
    reply.send(items)
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao buscar items', error: error.message })
  }
}

export const getItemById = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = idParamSchema.parse(req.params)
    const item = await itemService.getitemById(id)
    if (!item) {
      reply.status(404).send({ message: 'Item não encontrado' })
    } else {
      reply.send(item)
    }
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao buscar item', error: error.message })
  }
}

export const deleteItem = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = idParamSchema.parse(req.params)
    const deleted = await itemService.deleteItem(id)
    if (!deleted) {
      reply.status(404).send({ message: 'Item não encontrado para exclusão' })
    } else {
      reply.status(200).send({ message: 'Item deletado com sucesso' });
    }
  } catch (error) {
    reply.status(400).send({ message: 'Erro ao deletar item', error: error.message })
  }
};
