import {prisma} from '../imports/prismaClient'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/jwtUtils'



export async function registerUser(email:string, password:string): Promise<object>{
    const hashedPassword = await bcrypt.hash(password, 10)
    try{
        const newUser = await prisma.user.create({
            data:{
                email,
                password: hashedPassword
            }
        })
        return {id: newUser.id, email: newUser.email}
    }catch{
        throw new Error('Erro ao criar user')
    }
}

export async function loginUser(email: string, password:string): Promise<string | null>{
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(!user) return null
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) return null
    return generateToken({ id:user.id, email: user.email})
}