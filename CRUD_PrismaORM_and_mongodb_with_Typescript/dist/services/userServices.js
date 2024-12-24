"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsersById = exports.getAllUsers = exports.updateUser = exports.createUser = void 0;
const prisma_1 = require("../prisma");
const idGenerate_1 = require("../utils/idGenerate");
const hashUtil_1 = require("../utils/hashUtil");
const createUser = async (name, email, password) => {
    return prisma_1.prisma.user.create({
        data: {
            id: (0, idGenerate_1.generateId)(),
            name,
            email,
            password: (0, hashUtil_1.hashPassword)(password),
        }
    });
};
exports.createUser = createUser;
const updateUser = async (id, data) => {
    const existingUser = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!existingUser)
        throw new Error('Usuário não encontrado');
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            name: data.name || existingUser.name,
            email: data.email || existingUser.email,
            password: data.password ? (0, hashUtil_1.hashPassword)(data.password) : existingUser.password,
        }
    });
};
exports.updateUser = updateUser;
const getAllUsers = async () => {
    prisma_1.prisma.user.findMany();
};
exports.getAllUsers = getAllUsers;
const getUsersById = async (id) => {
    prisma_1.prisma.user.findUnique({
        where: { id }
    });
};
exports.getUsersById = getUsersById;
const deleteUser = async (id) => {
    prisma_1.prisma.user.delete({
        where: { id }
    });
};
exports.deleteUser = deleteUser;
