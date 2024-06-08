const express = require("express");
const router = express.Router();

import { loginController } from "../controllers";
import { createValidator } from "../../users/validators/user.create.validator";

router.post("/login", createValidator, loginController);

export default router;
