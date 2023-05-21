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
              <div className=" block text-sm font-medium leading-6 text-green-500">
                Message envoyer
              </div>
            ) : null}

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Message:
            </label>
            <Field
              as="textarea"
              rows={3}
              name="content"
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Message;
