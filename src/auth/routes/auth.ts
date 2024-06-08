const express = require("express");
const router = express.Router();

import { loginController } from "../controllers";
import { loginValidator } from "../validators";

router.post("/login", loginValidator, loginController);

export default router;
