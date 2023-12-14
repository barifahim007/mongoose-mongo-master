export interface IUser {
  id: string;
  role: "student"; // literel type
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female"; //union type
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presendAddress: string;
  permanentAddress: string;
}
