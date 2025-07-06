import { ErrorMessage, Field, Form, Formik } from "formik";
import { useCallback, useState } from "react";
import api from "../services/api";
import { useAppContext } from "./AppContext";
const initialValues = {
  password: "",
};

const ChecPassword = () => {
  const [active, setActive] = useState(false);
  const {
    state: { session },
  } = useAppContext();
  console.log(session);
  const email = session.email;
  console.log(email);
  const handleSubmit = useCallback(
    async ({ password }) => {
      console.log(password);
      const {
        data: { resultchec },
      } = await api.post("/api/chec-password", {
        email,
        password,
      });
      if (!resultchec) {
        setActive(true);
        console.log("ERROR");
        console.log(active);
        return;
      }
      console.log(resultchec);
      setActive(false);
    },
    [active, email]
  );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchemaPassword}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-3">
          <label>Password :</label>
          {active ? <p>Oooops! password erone</p> : null}
          <Field
            type="text"
            name="password"
            placeholder="password"
            className="border-2 border-black px-2 rounded"
          />
          <ErrorMessage
            name="password"
            component="small"
            className="text-red-600"
          />
          <button
            type="submit"
            className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
          >
            chec
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChecPassword;
