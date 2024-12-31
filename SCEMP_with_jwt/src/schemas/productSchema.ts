import {z} from 'zod'

export const productSchema = z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    quantity: z.number().min(0),
    category: z.enum([ "ELETRONICOS" , "ALIMENTOS", "ROUPAS", "OUTROS"])
})