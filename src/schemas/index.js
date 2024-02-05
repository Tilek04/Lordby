import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  username: yup
    .string()
    .min(1, "Mininum 1 characters")
    .max(15, "Maximum 15 characters")
    .required("You must enter a username"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { meesage: "Please create a stronger password" })
    .required("Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Required"),
});
