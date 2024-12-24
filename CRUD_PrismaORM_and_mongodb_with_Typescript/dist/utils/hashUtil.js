"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const crypto_1 = require("crypto");
const hashPassword = (password) => {
    return (0, crypto_1.createHash)('sha256').update(password).digest('hex');
};
exports.hashPassword = hashPassword;
