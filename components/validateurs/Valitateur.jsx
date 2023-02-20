import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "trop petit!")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("email invalide!")
    .required("l'email est obligatoire"),
  telephone: Yup.number().required("Ce champ est obligatoire"),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string()
    .required("Confirmation de mot de passe est obligatoire")
    .oneOf(
      [Yup.ref("password"), null],
      "Le mot de passe de confirmation ne correspond pas"
    ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accepter les conditions est obligatoire"
  ),
  type: Yup.string().required("Selectionner votre situation"),
  localite: Yup.string().required("Ce champ est obligatoire"),
  content: Yup.string()
    .max(1000, "trop long!")
    .required("Ce champ est obligatoire"),
});
export default validationSchema;
