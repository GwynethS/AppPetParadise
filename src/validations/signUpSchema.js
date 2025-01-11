import { object, ref, string } from "yup";

export const signUpSchema = object({
  email: string().required("Este campo es requerido.").email("Email inválido."),
  password: string().required("Este campo es requido.").min(8, "Minimo 8 caracteres."),
});
