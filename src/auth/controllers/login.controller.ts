import { Request, Response, NextFunction } from "express-serve-static-core";

import { loginService, signupService } from "../services";
const { validationResult } = require("express-validator");
import { jwtTokenGenerator } from "../utils/jwtTokenGenerator";

const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await loginService(req.body.email);
    const { email } = req.body;
    const jwtToken = await jwtTokenGenerator({ email });

    return res.status(200).json({
      msg: "logged in successfully.",
      data: {
        email: data[0].email,
        token: jwtToken,
      },
    });
  } catch (error) {
    signup(req, res);
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const data = await signupService({ email });
    const jwtToken = await jwtTokenGenerator({ email });

    return res.status(200).json({
      msg: "user created successfully.",
      data: {
        email,
        token: jwtToken,
      },
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { login };
