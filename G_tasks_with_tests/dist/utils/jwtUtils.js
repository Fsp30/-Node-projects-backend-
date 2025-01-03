"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET || 'default_secret';
function generateToken(payload, expiresIn = '1h') {
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
}
function verifyToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (typeof decoded === 'string') {
            return decoded;
        }
        return decoded;
    }
    catch (error) {
        return null;
    }
}
