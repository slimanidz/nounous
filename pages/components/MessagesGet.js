import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
// import api from "../services/api";
import { useAppContextNounou } from "./AppContextNounou";
import formatLongDateTime from "./formateurs/FormatDate";

const MessagesGet = () => {
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const [messages, setMessages] = useState(null);
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
  }, [sessionNounou.id]);

  if (!messages) {
    return <p>Loading </p>;
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center p-2">Messages :</h1>
      {messages.map((message) => (
        <div className="flex justify-between gap-3" key={message.id}>
          {" "}
          <h1 className="w-32">
            {users.map((user) =>
              user.id === message.userId ? (
                <span key={user.id}> {user.username} :</span>
              ) : null
            )}
          </h1>
          <div className="w-full pl-5 border-b-4 border-black mb-3">
            {" "}
            <p>{message.content}</p>
            <p className="text-slate-400">
              {formatLongDateTime(new Date(message.createdAt))}
            </p>
          </div>
          <button>repondre</button>
        </div>
      ))}
    </div>
  );
};

export default MessagesGet;
