import User from "./user.model";

const insertIntoDB = async () => {
  const user = new User({
    id: "8586ffdfddddssff",
    role: "student",
    password: "helloddddddsss ",
    name: {
      firstName: "ehsanul",
      middleName: "bari",
      lastName: "fahim",
    },
    dateOfBirth: "7-7-2002",
    gender: "male",
    email: "fahim@gmail.com",
    contactNo: "009488",
    emergencyContactNo: "0888",
    presendAddress: "dhaka",
    permanentAddress: "bd",
  });
  await user.save();
  console.log(user);
  return user;
};

export default insertIntoDB;
