import { FastifyRequest, FastifyReply } from 'fastify'
import { verifyToken } from '../utils/jwt'

interface AuthenticatedRequest extends FastifyRequest {
  user?: any;
}

export const authMiddleware = async (req: AuthenticatedRequest, reply: FastifyReply) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return reply.status(401).send({ message: "Token não fornecido" })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verifyToken(token)
    req.user = decoded
    return

  } catch (error) {
    return reply.status(401).send({ message: "Token inválido" })
  }
}