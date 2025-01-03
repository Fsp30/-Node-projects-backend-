import {z} from 'zod'

export const userSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6,"Senha muito curta").max(12,"Senha muito longa")
})