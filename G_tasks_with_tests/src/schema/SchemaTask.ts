import { z } from 'zod'

export const taskSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']),
    status: z.enum(['pending', 'completed']),
    duedate: z.string().transform((date) => new Date(date))
})