import * as Yup from "yup";

const ValidationSchemaPatch = Yup.object().shape({
  username1: Yup.string().min(5, "trop petit!").max(50, "trop long!"),
  email1: Yup.string().email("email invalide!"),
  telephone1: Yup.number(),
});
export default ValidationSchemaPatch;
