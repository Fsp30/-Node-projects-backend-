import { FastifyRequest, FastifyReply } from "fastify"
import prisma from "../database"
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/jwt"
import { userSchema } from "../schemas/userSchema"

export const registerUser = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { name, email, password, role } = userSchema.parse(req.body)
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                role
            }
        })
        res.status(201).send({ user })
    } catch {
        res.status(400).send({ message: 'Erro ao criar User' })
    }
}


export const loginUser = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { email, password } = req.body as { email: string, password: string }
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).send({ message: "Credenciais Inválidas" })
        }
        const token = generateToken({ id: user.id, role: user.role })
        res.status(200).send({ token })
    } catch {
        res.status(500).send({ message: 'Erro ao realizar Login' })
    }
}