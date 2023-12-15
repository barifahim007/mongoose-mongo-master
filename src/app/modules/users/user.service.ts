import { IUser } from "./user.interface";
import User from "./user.model";

const getFromDB = async () => {
  const users = User.find();
  return users;
};

const insertIntoDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  console.log(user);
  return user;
};

const getSingleUser = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  return user;
};

export const UserService = {
  getFromDB,
  insertIntoDB,
  getSingleUser,
};
