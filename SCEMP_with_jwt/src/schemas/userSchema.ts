import {z} from 'zod'

export const userSchema = z.object({
    name: z.string().min(3).max(110),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["ADMIN", "EMPLOYEE"])
})