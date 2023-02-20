import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import api from "../services/api";
// import api from "../services/api"
import { useAppContext } from "./AppContext";
import validationSchemaContent from "./validateurs/ValidateurContent";
import validationSchema from "./validateurs/Valitateur";

const initialValues = {
  content: "",
};

const Message = (props) => {
  const { nounouId } = props;
  console.log({ nounouId: nounouId });
  const {
    state: { session },
  } = useAppContext();
  const [isSended, setIsSended] = useState(false);

  const handleSubmit = useCallback(
    async ({ content }, { resetForm }) => {
      const userId = session.id;
      if (content === "") {
        return;
      }
      const {
        data: { result },
      } = await api.post("/api/messages", {
        content,
        userId,
        nounouId,
      });

      if (result) {
        resetForm();
        setIsSended(true);

        return;
      }
    },

    [nounouId]
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaContent}
      >
        <Form className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col">
            {isSended ? (
              <div className="text-xl text-center font-bold">
                Message envoyer
              </div>
            ) : null}

            <label>content **:</label>
            <Field
              as="textarea"
              name="content"
              className="border-2 border-black px-2 rounded"
              placeholder="contenu"
            />
            <ErrorMessage
              name="content"
              component="small"
              className="text-red-600"
            />
          </div>

          <button
            type="submit"
            className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
          >
            envoyer
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Message;
