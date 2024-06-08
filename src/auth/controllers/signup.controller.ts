import { Request, Response, NextFunction } from "express-serve-static-core";

const userCreateService = require("../../users/services/user.create.service");
const { validationResult } = require("express-validator");

const signup = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    await userCreateService.createUser(req.body);
    return res.status(201).json({ msg: "user created successfully." });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { signup };
