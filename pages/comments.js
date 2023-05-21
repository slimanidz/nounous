import React from "react";
import { useAppContext } from "../components/AppContext";
import Comments from "../components/comments/Comments";
import CommentsGet from "../components/comments/CommentsGet";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

const comments = () => {
  return (
    <Dashboard className="">
      <div className="h-full rounded bg-slate-200  ">
        <Comments />
        <CommentsGet />
      </div>
    </Dashboard>
  );
};

export default comments;
