import express from "express";
import path from "path";
const cookieParser = require("cookie-parser");
const logger = require("morgan");

import cors from "cors";

import indexRouter from "./routes/index";
import authRouter from "./auth/routes/auth";
import userRouter from "./users/routes/users.routes";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

module.exports = app;
