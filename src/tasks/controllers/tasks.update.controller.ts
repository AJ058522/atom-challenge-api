import { Request, Response } from "express-serve-static-core";

import { updateTaskService } from "../services";
const { validationResult } = require("express-validator");

const updateTaskController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await updateTaskService(req.body, req.params.taskId);

    return res.status(200).json({
      msg: "task updated successfully.",
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { updateTaskController };
