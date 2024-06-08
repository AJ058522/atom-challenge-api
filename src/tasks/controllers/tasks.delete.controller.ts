import { Request, Response } from "express-serve-static-core";

import { deleteOneTaskService } from "../services";

const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const data = await deleteOneTaskService(req.params.taskId);

    return res.status(200).json({
      msg: "task deleted successfully.",
    });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong." });
  }
};

export { deleteTaskController };
