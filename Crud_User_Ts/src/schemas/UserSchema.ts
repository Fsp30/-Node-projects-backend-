import {z} from 'zod'

export const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(3 , "O nome do Usuário deve conter no minímo 3 caracteres"),
    email: z.string().email(),
    age: z.number().int().positive("A idade do Usuário deve ser positiva")
})

export type User = z.infer<typeof userSchema>