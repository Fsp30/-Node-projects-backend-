import { z } from 'zod';

export const createItemSchema = z.object({
  name: z.string().min(1, 'Nome é necessario').max(100, 'Nome do item muito longo'),
  description: z.string().max(255, 'Descrição não pode ultrapassar 255 caracteres').optional(),
  userId: z.string().uuid('ID inválido'),
});

export const updateItemSchema = z.object({
  id: z.string().uuid('ID inválido'),
  name: z.string().optional(),
  description: z.string().max(255, 'Descrição não pode ultrapassar 255 caracteres').optional(),
});
export const idParamSchema = z.object({
  id: z.string().uuid('Formato de Id inválido'),
});