import express, { Application, NextFunction, Request, Response } from "express";
import userRouter from "./app/modules/users/user.route";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

export default app;
