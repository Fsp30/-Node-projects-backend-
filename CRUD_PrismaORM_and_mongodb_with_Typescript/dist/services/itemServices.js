"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.getitemById = exports.getAllItens = exports.updateItem = exports.createItem = void 0;
const prisma_1 = require("../prisma");
const idGenerate_1 = require("../utils/idGenerate");
const createItem = async (name, description, userId) => {
    return prisma_1.prisma.item.create({
        data: {
            id: (0, idGenerate_1.generateId)(),
            name,
            description,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    });
};
exports.createItem = createItem;
const updateItem = async (id, data) => {
    const existingItem = await prisma_1.prisma.item.findUnique({ where: { id } });
    if (!existingItem)
        throw new Error('Item not found');
    return prisma_1.prisma.item.update({
        where: { id },
        data: {
            name: data.name || existingItem.name,
            description: data.description || existingItem.description,
        },
    });
};
exports.updateItem = updateItem;
const getAllItens = async () => {
    return prisma_1.prisma.item.findMany();
};
exports.getAllItens = getAllItens;
const getitemById = async (id) => {
    return prisma_1.prisma.item.findUnique({
        where: { id }
    });
};
exports.getitemById = getitemById;
const deleteItem = async (id) => {
    return prisma_1.prisma.item.delete({
        where: { id }
    });
};
exports.deleteItem = deleteItem;
