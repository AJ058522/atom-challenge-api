import { Request, Response } from "express-serve-static-core";

import { createTaskService } from "../services";
const { validationResult } = require("express-validator");

const createTaskController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await createTaskService(req.body);

    return res.status(201).json({
      msg: "task created successfully.",
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { createTaskController };
