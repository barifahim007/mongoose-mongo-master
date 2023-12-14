import express, { Application, NextFunction, Request, Response } from "express";
import getuserdatarouter from "./app/modules/users/user.route";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", getuserdatarouter);

export default app;
