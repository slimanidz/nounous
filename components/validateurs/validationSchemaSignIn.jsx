import * as Yup from "yup";

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string()
    .email("email invalide!")
    .required("l'email est obligatoire"),

  password: Yup.string().required("Mot de passe est obligatoire"),
});
export default validationSchemaSignIn;
