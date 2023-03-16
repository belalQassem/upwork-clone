import * as yup from "yup";

export const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("User Name is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(regularExpression, "Invalid Password")
    .required("Password is required"),
});


