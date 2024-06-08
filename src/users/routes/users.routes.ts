const express = require("express");
const router = express.Router();

import { createUserController, getOneUserController } from "../controllers";
import { createValidator } from "../validators";

router.get("/:email", getOneUserController);
router.post("/", createValidator, createUserController);

export default router;
