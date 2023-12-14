import { Request, Response, NextFunction } from "express";
import insertIntoDB from "./user.service";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await insertIntoDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export default createUser;
