import { FastifyInstance } from 'fastify'
import * as itemController from '../controllers/itemController'

export default async (app: FastifyInstance) => {
  app.post('/', itemController.createItem)
  app.get('/', itemController.getAlItems)
  app.get('/:id', itemController.getItemById)
  app.put('/:id', itemController.updateItem)
  app.delete('/:id',itemController.deleteItem)
};
