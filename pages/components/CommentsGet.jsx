import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { formatLongDateTime } from "./formateurs/FormatDate";

const CommentsGet = (props) => {
  const { nounouId } = props;
  const [comments, setComments] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {
        data: { result1 },
      } = await api.get(`/api/comments/${nounouId}`);
      setComments(result1);

      const {
        data: { result },
      } = await api.get(`/api/users`);
      setUsers(result);
    }
    fetchData();
  }, [nounouId]);

  if (!comments) {
    return <p>Loading </p>;
  }

  return (
    <div>
      <h1 className=" text-3xl font-bold p-3"> Les commentaires:</h1>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id} className="flex w-full bg-blue-20">
            <li className="m-2 p-2  bg-red-200 rounded-full flex items-center">
              {users.map((user) =>
                user.id === comment.userId ? (
                  <p key={user.id}> {user.username}</p>
                ) : null
              )}
            </li>
            <li className="m-2 p-2  bg-slate-200">{comment.content}</li>
            <li className="m-2 p-2 text-sm text-slate-500  bg-slate-20">
              {formatLongDateTime(new Date(comment.createdAt))}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CommentsGet;
