import { Request, Response } from "express-serve-static-core";

import { getUserByEmail } from "../services";

const getOneUserController = async (req: Request, res: Response) => {
  try {
    const data = await getUserByEmail(req.params.email);

    if (data.length > 0) {
      return res.status(200).json(data[0]);
    }

    return res.status(404).json({
      msg: "user not found.",
    });
  } catch (error) {
    return error;
  }
};

export { getOneUserController };
