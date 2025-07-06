import * as Yup from "yup";

const validationSchemaContent = Yup.object().shape({
  content: Yup.string()
    .max(400, "trop long!")
    .required("Ce champ est obligatoire"),
});
export default validationSchemaContent;
