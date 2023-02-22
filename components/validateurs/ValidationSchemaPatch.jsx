import * as Yup from "yup";

const ValidationSchemaPatch = Yup.object().shape({
  username: Yup.string()
    .min(5, "trop petit!")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("email invalide!")
    .required("l'email est obligatoire"),
  telephone: Yup.number().required("Ce champ est obligatoire"),
});
export default ValidationSchemaPatch;
