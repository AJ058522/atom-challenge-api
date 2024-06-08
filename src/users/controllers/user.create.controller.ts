import { Request, Response } from "express-serve-static-core";

import { createUserService } from "../services";
const { validationResult } = require("express-validator");

const createUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.body;
    const created = await createUserService({ email });

    if (!created) {
      return res.status(200).json({
        msg: "user already exist.",
      });
    }
    return res.status(200).json({
      msg: "user created successfully.",
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { createUserController };
