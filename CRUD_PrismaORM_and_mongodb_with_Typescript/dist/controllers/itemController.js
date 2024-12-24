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
exports.deleteItem = exports.getItemById = exports.getAlItems = exports.updateItem = exports.createItem = void 0;
const itemSchema_1 = require("../schemas/itemSchema");
const itemService = __importStar(require("../services/itemServices"));
const createItem = async (req, reply) => {
    try {
        const validatedData = itemSchema_1.createItemSchema.parse(req.body);
        const item = await itemService.createItem(validatedData.name, validatedData.description, validatedData.userId);
        reply.status(201).send(item);
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao criar item' });
    }
};
exports.createItem = createItem;
const updateItem = async (req, reply) => {
    try {
        const validatedParams = itemSchema_1.idParamSchema.parse(req.params);
        const validatedData = itemSchema_1.updateItemSchema.parse(req.body);
        const item = await itemService.updateItem(validatedParams.id, validatedData);
        if (!item) {
            reply.status(404).send({ message: 'Item não encontrado para atualização' });
        }
        else {
            reply.send(item);
        }
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao atualizar item', error: error.message });
    }
};
exports.updateItem = updateItem;
const getAlItems = async (req, reply) => {
    try {
        const items = await itemService.getAllItens();
        reply.send(items);
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao buscar items', error: error.message });
    }
};
exports.getAlItems = getAlItems;
const getItemById = async (req, reply) => {
    try {
        const { id } = itemSchema_1.idParamSchema.parse(req.params);
        const item = await itemService.getitemById(id);
        if (!item) {
            reply.status(404).send({ message: 'Item não encontrado' });
        }
        else {
            reply.send(item);
        }
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao buscar item', error: error.message });
    }
};
exports.getItemById = getItemById;
const deleteItem = async (req, reply) => {
    try {
        const { id } = itemSchema_1.idParamSchema.parse(req.params);
        const deleted = await itemService.deleteItem(id);
        if (!deleted) {
            reply.status(404).send({ message: 'Item não encontrado para exclusão' });
        }
        else {
            reply.status(200).send({ message: 'Item deletado com sucesso' });
        }
    }
    catch (error) {
        reply.status(400).send({ message: 'Erro ao deletar item', error: error.message });
    }
};
exports.deleteItem = deleteItem;
