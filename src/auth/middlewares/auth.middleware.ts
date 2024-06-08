import { Request, Response, NextFunction } from "express-serve-static-core";
const jwt = require("jsonwebtoken");

const isAuthorized = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (token == null) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ msg: "forbidden" });
    }
    req.user = user;
    next();
  });
};

export { isAuthorized };
