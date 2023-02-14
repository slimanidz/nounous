const { default: classNames } = require("classnames");
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { useAppContext } from "./AppContext";
import CommentsGet from "./CommentsGet";

const initialValues = {
  content: "",
};

const ModalComments = (props) => {
  const { open, children, nounouId1, className } = props;
  const {
    state: { session },
  } = useAppContext();
  const nounouId = nounouId1;

  const handleSubmit = async ({ content }, { resetForm }) => {
    console.log("hello");
    console.log(content, nounouId);
    const {
      data: { result },
    } = await api.post("/api/comments", {
      content,
      userId: session.id,
      nounouId,
    });
    if (result) {
      resetForm();
    }
  };
  if (!open) {
    return null;
  }
  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 w-full  flex flex-col object- h-screen overflow-auto    ",
          className
        )}
      >
        <div className="">{children}</div>
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className=" flex flex-col items-center gap-3">
              <div className="flex flex-col">
                {session ? (
                  <h1 className="p-4 text-3xl font-bold ">
                    Laisser un commentaire pour votre nounou
                  </h1>
                ) : (
                  <h1 className="p-4 text-3xl font-bold ">
                    Vous pouvez connecter pour laisser un commentaire
                  </h1>
                )}

                <label>content *:</label>
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

              {session ? (
                <button
                  type="submit"
                  className=" p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                >
                  envoyer
                </button>
              ) : (
                <Link
                  href="/sign-up"
                  className=" p-2 text-center font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                >
                  Connecter ?
                </Link>
              )}
            </Form>
          </Formik>
          <CommentsGet nounouId={nounouId} />
        </div>
      </div>
    </>
  );
};

export default ModalComments;
