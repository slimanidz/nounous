import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useAppContext } from "../AppContext";
import formatLongDateTime from "../formateurs/FormatDate";

const CommentsGet = (props) => {
  const [users, setUsers] = useState([]);
  const { comments } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { result },
      } = await api.get(`/api/users`);
      setUsers(result);
    }
    fetchData();
  }, []);

  if (comments.length === 0) {
    return <p>Soyez le premier à commenter ...</p>;
  }

  return (
    <div className="">
      <ul className="flex flex-col-reverse">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="  flex justify-between rounded border-0 p-2 my-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-lg "
          >
            <div className="flex gap-4">
              <li className=" py-4 h-10 w-32  bg flex items-center ">
                {users.map((user) =>
                  user.id === comment.userId ? (
                    <p key={comment.id} className="underline">
                      {user.username}
                    </p>
                  ) : null
                )}
              </li>
              <li className="flex items-center text-sm font-medium leading-6 text-gray-900">
                {comment.content}
              </li>
            </div>

            <li className=" p-2 text-sm text-slate-500  bg-slate-20">
              {formatLongDateTime(new Date(comment.createdAt))}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CommentsGet;
