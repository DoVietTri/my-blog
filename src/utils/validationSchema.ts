import * as yup from "yup";

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .max(12, "Max 12 characters")
    .required("Password is required"),
});

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .max(255, "Max 255 characters")
    .required("Title is required"),
  content: yup.string().required("Content is required"),
});

export const updatePostSchema = yup.object().shape({
  title: yup.string().max(255, "Max 255 characters"),
  content: yup.string(),
});

export const uploadFileSchema = yup.object().shape({
  file: yup.string().required("URL is required"),
});
