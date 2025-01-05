import express from 'express'
import * as reservationController from '../controllers/reservesController'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: Gerenciamento de reservas
 */

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roomId
 *               - userId
 *               - startTime
 *               - endTime
 *             properties:
 *               roomId:
 *                 type: string
 *               userId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 */
router.post('/reservations', reservationController.createReserve)

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Retorna a lista de reservas
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/reservations', reservationController.getReserves)

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Retorna uma reserva pelo ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 */
router.get('/reservations/:id', reservationController.getReserve)

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Atualiza uma reserva pelo ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: string
 *               userId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Reserva atualizada com sucesso
 */
// router.put('/reservations/:id', reservationController.updateReserve)

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Remove uma reserva pelo ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da reserva
 *     responses:
 *       200:
 *         description: Reserva removida com sucesso
 */
router.delete('/reservations/:id', reservationController.deleteReserve)

export default router
