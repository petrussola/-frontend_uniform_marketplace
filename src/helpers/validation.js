import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup.string().email().required().trim().lowercase(),
  password: yup
    .string()
    .required()
    .trim()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(250, ({ max }) => `Password cannot be longer than ${max} characters`), // https://github.com/jquense/yup/issues/640#issuecomment-708277185
});
