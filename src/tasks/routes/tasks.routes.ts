const express = require("express");
const router = express.Router();

import {
  createTaskController,
  updateTaskController,
  getOneTaskController,
  getAllTaskController,
  deleteTaskController,
} from "../controllers";
import { createValidator, updateValidator } from "../validators";

router.get("/", getAllTaskController);
router.get("/:taskId", getOneTaskController);
router.post("/", createValidator, createTaskController);
router.put("/:taskId", updateValidator, updateTaskController);
router.delete("/:taskId", deleteTaskController);

export default router;
