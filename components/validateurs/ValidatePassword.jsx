import * as Yup from "yup";

const validationSchemaPassword = Yup.object().shape({
  password: Yup.string().required("Mot de passe est obligatoire"),
});
export default validationSchemaPassword;
