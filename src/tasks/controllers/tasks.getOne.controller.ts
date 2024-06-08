import { Request, Response } from "express-serve-static-core";

import { getOneTaskService } from "../services";

const getOneTaskController = async (req: Request, res: Response) => {
  try {
    const data = await getOneTaskService(req.params.taskId);
    if (data) {
      return res.status(200).json(data);
    }

    return res.status(404).json({
      msg: "task not found.",
    });
  } catch (error) {
    return error;
  }
};

export { getOneTaskController };
