import express from "express";
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

import cors from "cors";

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
