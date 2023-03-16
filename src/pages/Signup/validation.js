import * as yup from "yup";
import { regularExpression } from "../Login/validation";

export const schema = yup.object().shape({
  firstname: yup
    .string()
    .min(4, "FirstName must be at least 6 characters")
    .max(16, "FirstName must be no more than 16 characters")
    .required("FirstName is required"),
  lastname: yup
    .string()
    .min(3, "LastName must be at least 6 characters")
    .max(16, "LastName must be no more than 16 characters")
    .required("LastName is required"),

  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(regularExpression, "Invalid Password")
    .required("Password is required"),
  checked: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required(),
});
