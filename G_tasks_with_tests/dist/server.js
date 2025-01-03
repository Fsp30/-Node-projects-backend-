"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./imports/express"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
express_1.default.use("/tasks", taskRoutes_1.default);
const PORT = process.env.PORT || 3000;
express_1.default.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
