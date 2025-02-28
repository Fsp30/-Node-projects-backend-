"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controller/taskController");
const authMiddleawares_1 = require("../middlewares/authMiddleawares");
const router = (0, express_1.Router)();
router.use(authMiddleawares_1.authMiddleware);
router.get("/", taskController_1.list);
router.post("/", taskController_1.create);
router.put("/:id", taskController_1.update);
router.delete("/:id", taskController_1.remove);
exports.default = router;
