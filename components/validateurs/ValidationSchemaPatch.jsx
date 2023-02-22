import * as Yup from "yup";

const ValidationSchemaPatch = Yup.object().shape({
  username: Yup.string().min(5, "trop petit!").max(50, "trop long!"),
  email: Yup.string().email("email invalide!"),
  telephone: Yup.number(),
});
export default ValidationSchemaPatch;
