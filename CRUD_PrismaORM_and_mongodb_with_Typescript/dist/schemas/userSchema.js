"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Insira um nome").max(60, "Nome de usuário muito longo"),
    email: zod_1.z.string().email("Email inválido"),
    password: zod_1.z.string().min(8, "Senha precisa ter no mínimo 8 caracteres").max(20, "Senha muito longa")
});
exports.updateUserSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1, "Insira um nome").max(60, "Nome de usuário muito longo").optional(),
    email: zod_1.z.string().email('Email inválido').optional(),
    password: zod_1.z.string().min(8, "Senha precisa ter no mínimo 8 caracteres").max(20, "Senha muito longa").optional()
});
