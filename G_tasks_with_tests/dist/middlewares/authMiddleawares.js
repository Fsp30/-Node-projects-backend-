"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jwtUtils_1 = require("../utils/jwtUtils");
function authMiddleware(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(" ")[1];
    if (!token) {
        res.status(401).json({ error: "Token não provido" });
        return;
    }
    const decoded = (0, jwtUtils_1.verifyToken)(token);
    if (!decoded) {
        res.status(401).json({ error: "Token inválido ou expirado" });
        return;
    }
    req.user = decoded;
    next();
}
