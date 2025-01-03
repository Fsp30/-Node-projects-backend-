"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.list = list;
exports.update = update;
exports.remove = remove;
const taskService_1 = require("../services/taskService");
const SchemaTask_1 = require("../schema/SchemaTask");
async function create(req, res) {
    const userId = req.user?.id;
    const validationTask = SchemaTask_1.taskSchema.safeParse(req.body);
    if (!validationTask.success) {
        res.status(400).json({ error: '' });
        return;
    }
    try {
        const task = await (0, taskService_1.createTask)(userId, req.body);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ error: "Failha na criação da tarefa" });
    }
}
async function list(req, res) {
    const userId = req.user?.id;
    try {
        const tasks = await (0, taskService_1.GetTasksByUserId)(userId);
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: "Falha para listar tarefas" });
    }
}
async function update(req, res) {
    const userId = req.user?.id;
    const { id } = req.params;
    try {
        const task = await (0, taskService_1.updateTask)(id, userId, req.body);
        if (!task) {
            res.status(404).json({ error: "Tarefa não encontrada, ou não pode ser alterada" });
            return;
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ error: "Falha da mudança da tarefa" });
    }
}
async function remove(req, res) {
    const userId = req.user?.id;
    const { id } = req.params;
    try {
        const task = await (0, taskService_1.deleteTask)(id, userId);
        if (!task) {
            res.status(404).json({ error: "Tarafa não encontrada" });
            return;
        }
        res.status(200).json({ message: "Tarefa deletada com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Falha na deleção de tarefa" });
    }
}
