import { Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { useAppContextNounou } from "./AppContextNounou";
import formatLongDateTime from "./formateurs/FormatDate";
import Header from "./Header";
import Page from "./Page";

const initialValues = {
  content: "",
};

const MessagesGet = () => {
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { result },
      } = await api.get("/api/users");
      setUsers(result);
      const nounouId = sessionNounou.id;
      const {
        data: { result1 },
      } = await api.get(`/api/messages/${nounouId}`);
      setMessages(result1);
    })();
  }, [sessionNounou]);

  const handleRepodre = useCallback(async ({ content }, { resetForm }) => {
    console.log(content);

    resetForm();
  }, []);

  return (
    <Page>
      <Header />
      <h1 className="text-3xl font-bold text-center p-2">Messages :</h1>
      {messages.length === 0 ? <p>Leading...</p> : null}
      <div className="p-5 flex flex-col-reverse">
        {messages.map((message) => (
          <div
            className="flex justify-between gap-3  border-b-4 border-black"
            key={message.id}
          >
            <h1 className="w-32">
              {users.map((user) =>
                user.id === message.userId ? (
                  <span key={user.id}> {user.username} :</span>
                ) : null
              )}
            </h1>
            <div className="w-full pl-5  mb-3">
              <p>{message.content}</p>
              <p className="text-slate-400">
                {formatLongDateTime(new Date(message.createdAt))}
              </p>
              <div>
                <Formik onSubmit={handleRepodre} initialValues={initialValues}>
                  <Form className="flex gap-2 justify-between">
                    <Field
                      placeholder="repondre"
                      type="text"
                      name="content"
                      className="w-full border-2 border-black"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 active:bg-blue-400 text-white rounded px-1"
                    >
                      repondre
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default MessagesGet;
