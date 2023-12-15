import { Request, Response } from "express";
import { UserService } from "./user.service";

const getFromDB = async (req: Request, res: Response) => {
  const user = await UserService.getFromDB();
  res.status(200).json({
    status: "successfully data fetch",
    data: user,
  });
};

const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await UserService.insertIntoDB(data);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

const getSingleUSer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleUser = await UserService.getSingleUser(id);
  res.status(200).json({
    status: "signle user fatched",
    data: singleUser,
  });
};

export const UserController = {
  getFromDB,
  createUser,
  getSingleUSer,
};
