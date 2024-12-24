"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const crypto_1 = require("crypto");
const generateId = () => (0, crypto_1.randomUUID)();
exports.generateId = generateId;
