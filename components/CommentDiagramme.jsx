import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import api from "../services/api";
import { useState } from "react";

const CommentDiagramme = () => {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const {
        data: { result, count },
      } = await api.get(`/api/comments`);
      setCount(count);
    })();
  }, []);

  const data = {
    labels: ["Comments"],
    datasets: [
      {
        label: "Comments",
        data: [Count],
        backgroundColor: ["green"],
      },
    ],
  };
  const options = {
    responsive: true,
  };

  return (
    <div className="md:w-96 bg-slate-300 m-5">
      <h1 className=" text-2xl font-bold text-center pt-5">COMMENTAIRES </h1>

      <div className="">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CommentDiagramme;
