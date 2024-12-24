"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserById = exports.getAllUsers = exports.updateUser = exports.createUser = void 0;
const userSchema_1 = require("../schemas/userSchema");
const userService = __importStar(require("../services/userServices"));
const zod_1 = require("zod");
const idParamSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
const createUser = async (req, reply) => {
    try {
        const validatedData = userSchema_1.createUserSchema.parse(req.body);
        const user = await userService.createUser(validatedData.name, validatedData.email, validatedData.password);
        reply.send(user);
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao criar usuário', error: error.message });
    }
};
exports.createUser = createUser;
const updateUser = async (req, reply) => {
    try {
        const validatedData = userSchema_1.updateUserSchema.parse(req.body);
        const user = await userService.updateUser(validatedData.id, validatedData);
        reply.send(user);
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao atualizar o usuário', error: error.message });
    }
};
exports.updateUser = updateUser;
const getAllUsers = async (req, reply) => {
    try {
        const users = await userService.getAllUsers();
        reply.send(users);
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao buscar usuários', error: error.message });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, reply) => {
    try {
        const { id } = idParamSchema.parse(req.params);
        const user = await userService.getUsersById(id);
        if (!user) {
            reply.status(404).send({ message: 'Usuário não encontrado' });
        }
        else {
            reply.send(user);
        }
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao buscar usuário', error: error.message });
    }
};
exports.getUserById = getUserById;
const deleteUser = async (req, reply) => {
    try {
        const { id } = idParamSchema.parse(req.params);
        const deleted = await userService.deleteUser(id);
        if (!deleted) {
            reply.status(404).send({ message: 'Usuário não encontrado para exclusão' });
        }
        else {
            reply.status(200).send({ message: 'Usuário deletado com sucesso' });
        }
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao deletar usuário', error: error.message });
    }
};
exports.deleteUser = deleteUser;
