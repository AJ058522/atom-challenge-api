import { Request, Response, NextFunction } from "express-serve-static-core";

import {loginService} from "../services");
const { validationResult } = require("express-validator");
import { jwtTokenGenerator } from "../utils/jwtTokenGenerator";

const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await loginService(req.body.email);
    const jwtToken = await jwtTokenGenerator(data[0]);

    return res.status(200).json({
      msg: "logged in successfully.",
      data: {
        email: data[0].email,
        token: jwtToken,
      },
    });
  } catch (error) {
    return res.status(400).json({ msg: "user not found." });
  }
};

export { login };
