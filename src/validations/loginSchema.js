import { object, string } from "yup";

export const loginSchema = object({
  email: string().required('Este campo es requerido.'),
  password: string().required('Este campo es requerido.')
})
