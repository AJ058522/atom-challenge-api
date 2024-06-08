const express = require("express");
const router = express.Router();

import { loginController, signupController } from "../controllers";
import { createValidator } from "../../users/validators";
import { loginValidator } from "../validators";

router.post("/signup", createValidator, signupController);
router.post("/login", loginValidator, loginController);

export default router;
