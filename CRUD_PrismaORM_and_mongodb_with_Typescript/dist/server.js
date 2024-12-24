"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const app = (0, fastify_1.default)();
app.register(userRoutes_1.default, { prefix: '/users' });
app.register(itemRoutes_1.default, { prefix: '/items' });
app.listen({ port: 3000 }, (address) => {
    console.log(`Servidor rodando em ${address}`);
});
