import { prisma } from "../prisma"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.SECRET_JWT || 'secret'

export const registerUser = async (email:string, password: string)=>{
    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    })
}

export const loginUser = async (email: string, password:string)=>{
    const user = await prisma.user.findUnique({where:{email}})
    if(!user || !(await bcrypt.compare(password, user.password))){
        throw new Error("Senha ou email Inválidos")
    }
    const token = jwt.sign({userId: user.id}, JWT_SECRET)
    return token
}