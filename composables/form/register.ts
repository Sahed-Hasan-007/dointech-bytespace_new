import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .required("Full name is required."),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
