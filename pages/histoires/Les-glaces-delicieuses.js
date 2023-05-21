import React, { useState } from "react";
import Header from "../../components/Header";
import ImageSrc from "../../components/ImageSrc";
import Dashboard from "../../components/Dashboard";
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
  };
  const handleBack = () => {
    if (num === 1) {
      return;
    }
    setNum(num - 1);
  };

  return (
    <Dashboard>
      <h1 className="pt-5 text-3xl text-center font-bold">
        Les glaces délicieuses
      </h1>
      <div className="w-full flex gap-3 justify-center items-center mt-10 md:mt-20 p-3">
        <button
          className={
            num === 1
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] left-10"
              : "absolute top-[50%] left-10"
          }
          onClick={handleBack}
        >
          {" "}
          <BiCaretLeftCircle className="w-10 h-10  md:w-20 md:h-20 " />
        </button>
        <div className="flex flex-col items-center gap-3">
          <ImageSrc
            width="400"
            height="80"
            className="w-[80%] h-[300px] md:h-[500px]"
            alt="histoire"
            src={`/histoire1/${num}.jpg`}
          />
          {num === 1 ? (
            <h1 className="text-3xl text-center font-bold">
              Les glaces délicieuses
            </h1>
          ) : null}
          {num === 2 ? (
            <h1 className="text-3xl text-center">
              Ding ding ding ding « Shubham, Ira, Tonton Sorbet est là ! »
            </h1>
          ) : null}
          {num === 3 ? (
            <h1 className="text-3xl text-center">
              Tous les enfants se précipitent vers Tonton Sorbet !
            </h1>
          ) : null}
          {num === 4 ? (
            <h1 className="text-3xl text-center">
              Nous nous regardons à travers les bouteilles.
              <br /> Nos visages ont l&rsquo;air si drôles !
            </h1>
          ) : null}
          {num === 5 ? (
            <h1 className="text-3xl text-center">
              Miammm... Des glaces magiques et colorées !
            </h1>
          ) : null}
          {num === 6 ? (
            <h1 className="text-3xl text-center">
              Saee tapote la glace de Abhi.
            </h1>
          ) : null}
          {num === 7 ? (
            <h1 className="text-3xl text-center">
              Une glace tombe, mais Bhoori est très content.
            </h1>
          ) : null}
          {num === 8 ? (
            <h1 className="text-3xl text-center">
              J&rsquo;aime les glaces. J&rsquo;en vois partout.
            </h1>
          ) : null}
          {num === 9 ? (
            <h1 className="text-3xl text-center">
              Shubham veut être un Tonton Sorbet quand il sera grand.
            </h1>
          ) : null}
          {num === 10 ? (
            <h1 className="text-3xl text-center">
              Il me fera une ÉNORME glace.
            </h1>
          ) : null}
          {num === 11 ? (
            <h1 className="text-3xl text-center">
              Shubham pourra en manger un morceau, tout comme Bhoori.
            </h1>
          ) : null}
          {num === 12 ? (
            <h1 className="text-3xl text-center">
              J&rsquo;avalerai le reste !
            </h1>
          ) : null}
        </div>

        <button
          className={
            num === 13
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] right-10"
              : "absolute top-[50%] right-10"
          }
          onClick={handleNext}
        >
          <BiCaretRightCircle className="w-10 h-10 md:w-20 md:h-20 " />
        </button>
      </div>
    </Dashboard>
  );
};

export default Histoire1;
