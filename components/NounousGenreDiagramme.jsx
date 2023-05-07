import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { Bar, PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const NounousGenreDiagramme = () => {
  const [count, setCount] = useState(0);
  const [nounous, setnounous] = useState([]);
  const [typeDiagramme, setTypeDiagramme] = useState("Bar");

  ("Je suis professionnelle de la Petite Enfance");
  ("Je suis étudiante");
  ("Je suis salariée à temps partiel");
  ("Je suis jeune retraitée");
  ("autre");
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;

  useEffect(() => {
    (async () => {
      const {
        data: { result, count },
      } = await api.get(`/api/nounous`);
      console.log(result);
      setCount(count);
      setnounous(result);
    })();
  }, []);

  nounous.map((item) => {
    if (item.situation === "Je suis professionnelle de la Petite Enfance") {
      a += 1;
    }
    if (item.situation === "Je suis étudiante") {
      b += 1;
    }
    if (item.situation === "Je suis salariée à temps partiel") {
      c += 1;
    }
    if (item.situation === "Je suis jeune retraitée") {
      d += 1;
    }
    if (item.situation === "autre") {
      e += 1;
    }
    console.log(a, b, c, d, e);
  });

  const data = {
    labels: [
      "professionnelle P E",
      "étudiante",
      "salariée T P",
      "jeune retraitée",
      "autre",
    ],
    datasets: [
      {
        label: "NOUNOUS",
        data: [a, b, c, d, e],
        backgroundColor: ["red", "blue", "yellow", "orange", "green"],
      },
    ],
  };
  const options = {
    responsive: true,
  };

  const handleChange = (event) => {
    setTypeDiagramme(event.target.value);
  };

  return (
    <div className="md:w-96 bg-slate-300 m-5">
      <h1 className=" text-2xl font-bold text-center pt-5">
        NOUNOUS PAR SITUATIONS{" "}
      </h1>

      <div className="m-3 flex justify-center gap-3">
        <label>Type de diagramme:</label>
        <select
          onChange={handleChange}
          className="border-4 border-double border-black "
        >
          <option value="Bar">Bar</option>
          <option value="PolarArea">PolarArea</option>
        </select>
      </div>

      <div className="flex">
        {typeDiagramme === "Bar" ? (
          <Bar data={data} options={options} />
        ) : (
          <PolarArea data={data} options={options} />
        )}
      </div>
    </div>
  );
};

export default NounousGenreDiagramme;
