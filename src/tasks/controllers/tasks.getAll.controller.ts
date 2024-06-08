import { Request, Response } from "express-serve-static-core";

import { getAllTasksService } from "../services";
import { log } from "console";

const getAllTaskController = async (req: Request, res: Response) => {
  const userId: string = req.headers["userid"]
    ? String(req.headers["userid"])
    : "";

  try {
    const data = await getAllTasksService(userId);

    if (data.length > 0) {
      return res.status(200).json(data);
    }

    return res.status(404).json([]);
  } catch (error) {
    return error;
  }
};

export { getAllTaskController };
