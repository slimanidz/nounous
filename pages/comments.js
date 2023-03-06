import React from "react";
import { useAppContext } from "../components/AppContext";
import Comments from "../components/comments/Comments";
import CommentsGet from "../components/comments/CommentsGet";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TestProps = (props) => {
  const { nounouIdC } = useAppContext();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="grow">
        <Comments />
        <CommentsGet />
      </div>

      <Footer />
    </div>
  );
};

export default TestProps;
