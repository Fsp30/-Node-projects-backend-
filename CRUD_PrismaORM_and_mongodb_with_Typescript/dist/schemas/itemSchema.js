"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.updateItemSchema = exports.createItemSchema = void 0;
const zod_1 = require("zod");
exports.createItemSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Nome é necessario').max(100, 'Nome do item muito longo'),
    description: zod_1.z.string().max(255, 'Descrição não pode ultrapassar 255 caracteres').optional(),
    userId: zod_1.z.string().uuid('ID inválido'),
});
exports.updateItemSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('ID inválido'),
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().max(255, 'Descrição não pode ultrapassar 255 caracteres').optional(),
});
exports.idParamSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Formato de Id inválido'),
});
