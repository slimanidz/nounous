import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import api from "../../services/api";
import { useAppContext } from "../AppContext";
import validationSchemaContent from "../validateurs/ValidateurContent";
// import CommentsGet from "./CommentsGet";

const initialValues = {
  content: "",
};

const Comments = () => {
  const {
    state: { session },
  } = useAppContext();
  const { nounouIdC, addComments } = useAppContext();

  const nounouId = nounouIdC;

  const handleSubmit = async ({ content }, { resetForm }) => {
    const {
      data: { result },
    } = await api.post("/api/comments", {
      content,
      userId: session.id,
      nounouId,
    });
    addComments(result);
    resetForm();
    if (result) {
    }
  };

  return (
    <div>
      <>
        <div className="p-5 md:p-10 flex flex-col items-center ">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchemaContent}
          >
            <Form className=" flex flex-col items-center gap-3 mx-2 ">
              <div className="flex flex-col">
                {session ? (
                  <h1 className="p-4 text-xl font-medium text-center">
                    Laisser un commentaire pour votre nounou
                  </h1>
                ) : (
                  <h1 className="p-4 text-xl font-medium text-center">
                    Vous pouvez vous connecter pour laisser un commentaire
                  </h1>
                )}

                {/* <label>content </label> */}
                <Field
                  as="textarea"
                  name="content"
                  rows={2}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="contenu"
                />
                <ErrorMessage
                  name="content"
                  component="small"
                  className="text-red-600"
                />
              </div>

              {session ? (
                <button
                  type="submit"
                  className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Comment
                </button>
              ) : (
                <Link
                  href="/sign-up"
                  className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Se connecter
                </Link>
              )}
            </Form>
          </Formik>
          <div className=" w-[75%]  border-t-4 border-double  border-black mt-5 md:mt-10"></div>
        </div>
      </>
    </div>
  );
};

export default Comments;
