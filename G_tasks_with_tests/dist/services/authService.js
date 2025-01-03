"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const prismaClient_1 = require("../imports/prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtUtils_1 = require("../utils/jwtUtils");
async function registerUser(email, password) {
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    try {
        const newUser = await prismaClient_1.prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        return { id: newUser.id, email: newUser.email };
    }
    catch {
        throw new Error('Erro ao criar user');
    }
}
async function loginUser(email, password) {
    const user = await prismaClient_1.prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user)
        return null;
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid)
        return null;
    return (0, jwtUtils_1.generateToken)({ id: user.id, email: user.email });
}
