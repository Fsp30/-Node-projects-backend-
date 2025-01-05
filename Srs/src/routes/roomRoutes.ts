import express from 'express'
import * as roomController from '../controllers/roomController'


const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Gerenciamento de salas
 */

/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Cria uma nova sala
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - capacity
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               resources:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Sala criada com sucesso
 */
router.post('/rooms', roomController.createRoom)

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Retorna a lista de salas
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Lista de salas
 */
router.get('/rooms', roomController.getRoom)

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Retorna uma sala pelo ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da sala
 *     responses:
 *       200:
 *         description: Sala encontrada
 */
router.get('/rooms/:id', roomController.getRoomById)

/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Atualiza uma sala pelo ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da sala
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               resources:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Sala atualizada com sucesso
 */
// router.put('/rooms/:id',roomController.updateRoom)
/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Remove uma sala pelo ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da sala
 *     responses:
 *       200:
 *         description: Sala removida com sucesso
 */
router.delete('/rooms/:id', roomController.deleteRoom)

export default router
