import React, { useState } from "react";
import Header from "../../components/Header";
import ImageSrc from "../../components/ImageSrc";
import Page from "../../components/Page";
import { BiCaretLeftCircle } from "react-icons/bi";
import { BiCaretRightCircle } from "react-icons/bi";

const Histoire1 = () => {
  // let num = 1;
  const [num, setNum] = useState(1);
  const handleNext = () => {
    if (num === 13) {
      return;
    }
    setNum(num + 1);
    console.log(num);
  };
  const handleBack = () => {
    if (num === 1) {
      return;
    }
    setNum(num - 1);
    console.log(num);
  };

  return (
    <Page>
      <Header />
      <div className="w-full flex gap-3 justify-between items-center mt-32 p-3">
        <button onClick={handleBack}>
          {" "}
          <BiCaretLeftCircle className="w-8 h-8 " />
        </button>
        <ImageSrc
          width="400"
          height="80"
          className="w-[80%]"
          alt="histoire"
          src={`/histoire1/${num}.jpg`}
        />
        <button onClick={handleNext}>
          <BiCaretRightCircle className="w-8 h-8 " />
        </button>
      </div>
    </Page>
  );
};

export default Histoire1;
