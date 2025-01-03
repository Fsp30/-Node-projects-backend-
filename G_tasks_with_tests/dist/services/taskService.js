"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.GetTasksByUserId = GetTasksByUserId;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
const prismaClient_1 = require("../imports/prismaClient");
async function createTask(userId, data) {
    return await prismaClient_1.prisma.task.create({
        data: {
            ...data,
            userId
        }
    });
}
async function GetTasksByUserId(userId) {
    return await prismaClient_1.prisma.task.findMany({
        where: {
            userId
        }
    });
}
async function updateTask(userId, id, data) {
    const task = await prismaClient_1.prisma.task.findUnique({
        where: {
            id
        }
    });
    if (task?.userId !== userId)
        return null;
    return await prismaClient_1.prisma.task.update({
        where: {
            id
        }, data
    });
}
async function deleteTask(id, userId) {
    const task = await prismaClient_1.prisma.task.findUnique({
        where: {
            id
        }
    });
    if (task?.userId !== userId)
        return null;
    return await prismaClient_1.prisma.task.delete({
        where: {
            id
        }
    });
}
