import Link from "next/link";
import React from "react";
import NounousGet from "./components/NounousGet";
// import NounousGet from "../components/NounousGet";

const Nounous = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 bg-green-30">
        <Link
          className="p-2 h-10 w-32  border-4 border-double border-black rounded-xl text-center font-bold"
          href="/message"
        >
          messages
        </Link>
        <h1 className="p-2 h-10 w-32  border-4 border-double border-black rounded-xl text-center font-bold">
          Agenda
        </h1>
        <h1 className="p-2 h-10 w-32  border-4 border-double border-black rounded-xl text-center font-bold">
          comments
        </h1>
      </div>

      <NounousGet />
    </div>
  );
};

export default Nounous;
