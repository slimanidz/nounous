import { Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { useAppContextNounou } from "./AppContextNounou";
import formatLongDateTime from "./formateurs/FormatDate";
import Header from "./Header";
import Page from "./Page";

const initialState = {
  content: "",
};

const MessagesGet = () => {
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [stat, setState] = useState(initialState);
  const [reponseMessage, setreponseMessage] = useState([]);

  // useEffect(() => {
  //   console.log(123);

  // }, []);

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

      console.log(123);

      const {
        data: { result2 },
      } = await api.get("/api/reponse-message");
      setreponseMessage(result2);
      console.log({ result2: result2 });
      console.log({ reponseMessage: reponseMessage });
    })();
  }, [sessionNounou]);

  const handleRepodre = async (event) => {
    if (stat.content === "") {
      return;
    }
    const id = Number(event.currentTarget.getAttribute("data-id"));
    console.log({ id, stat });
    const {
      data: { result },
    } = await api.post("/api/reponse-message", {
      content: stat,
      messageId: id,
    });
    console.log({ result });
    setState(initialState);

    // resetForm();
  };

  const onchange = (event) => {
    setState(event.target.value);

    // console.log(event.target.value);
  };

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
                  <span key={user.id}> {user.username}:</span>
                ) : null
              )}
            </h1>
            <div className="w-full pl-5  mb-3">
              <p>{message.content}</p>
              <p className="text-slate-400">
                {formatLongDateTime(new Date(message.createdAt))}
              </p>
              {/* {<p>toto :{reponseMessage[0].messageId}</p>} */}

              {reponseMessage.map((reponse) => (
                <div key={message.id}>
                  {message.id === reponse.messageId && (
                    <p className="ml-5 bg-slate-100">{reponse.content}</p>
                  )}
                </div>
              ))}

              <div className="flex gap-2">
                <input
                  placeholder="repondre"
                  type="text"
                  value={stat.content}
                  className="w-full border-2 border-black"
                  onChange={onchange}
                />
                {message.id}
                <button
                  // type="submit"
                  onClick={handleRepodre}
                  data-id={message.id}
                  className="bg-blue-600 active:bg-blue-400 text-white rounded px-1"
                >
                  repondre
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default MessagesGet;
