"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const authService_1 = require("../services/authService");
const UserSchema_1 = require("../schema/UserSchema");
async function register(req, res) {
    const validateUser = UserSchema_1.userSchema.safeParse(req.body);
    if (!validateUser) {
        res.status(402).send({ error: "Falha na criação do usuário devido a dados em formato inválido" });
        return;
    }
    const { email, password } = req.body;
    try {
        const newUser = await (0, authService_1.registerUser)(email, password);
        res.status(201).send({ message: 'Usuário criado com sucesso', newUser });
    }
    catch {
        res.status(401).json({ error: " Falah ao criar usuário" });
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const token = await (0, authService_1.loginUser)(email, password);
        if (!token) {
            res.status(401).json({ erro: "Senha ou email inválidos" });
            return;
        }
        res.status(200).json({ token });
    }
    catch {
        res.status(500).json({ erro: "Falha ao fazer login" });
    }
}
