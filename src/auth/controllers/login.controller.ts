import { Request, Response } from "express-serve-static-core";

import {
  getUserByEmail,
  createUserService,
} from "../../users/services/users.service";
const { validationResult } = require("express-validator");
import { jwtTokenGenerator } from "../utils/jwtTokenGenerator";

const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await getUserByEmail(req.body.email);
    const jwtToken = await jwtTokenGenerator(data[0]);

    return res.status(200).json({
      msg: "logged in successfully.",
      data: {
        ...data[0],
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
    await createUserService({ email });
    const user = await getUserByEmail(req.body.email);
    const jwtToken = await jwtTokenGenerator(user[0]);

    return res.status(200).json({
      msg: "user created successfully.",
      data: {
        ...user[0],
        token: jwtToken,
      },
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { login };
