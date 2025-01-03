"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    priority: zod_1.z.enum(['low', 'medium', 'high']),
    status: zod_1.z.enum(['pending', 'completed']),
    duedate: zod_1.z.string().transform((date) => new Date(date))
});
