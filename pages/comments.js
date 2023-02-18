import React from "react";
import { useAppContext } from "../components/AppContext";
import Comments from "../components/comments/Comments";
import CommentsGet from "../components/comments/CommentsGet";

const TestProps = (props) => {
  const { nounouIdC } = useAppContext();

  console.log(nounouIdC);
  return (
    <div>
      <Comments />
      <CommentsGet />
    </div>
  );
};

export default TestProps;
