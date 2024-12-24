import {z} from 'zod'

export const createUserSchema = z.object({
    name: z.string().min(1, "Insira um nome").max(60, "Nome de usuário muito longo"),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Senha precisa ter no mínimo 8 caracteres").max(20, "Senha muito longa")
})

export const updateUserSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, "Insira um nome").max(60, "Nome de usuário muito longo").optional(),
    email: z.string().email('Email inválido').optional(),
    password: z.string().min(8, "Senha precisa ter no mínimo 8 caracteres").max(20, "Senha muito longa").optional()
})