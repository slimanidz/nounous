import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { Bar, PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const UsersDiagramme = () => {
  const [users, setUsers] = useState(0);
  const [nounous, setNounous] = useState(0);
  const [typeDiagramme, setTypeDiagramme] = useState("Bar");

  let total = Number(users) + Number(nounous);
  useEffect(() => {
    (async () => {
      const {
        data: { result, count },
      } = await api.get(`/api/nounous`);

      setNounous(count);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const {
        data: { result, count },
      } = await api.get(`/api/users`);
      setUsers(count);
    })();
  }, []);

  const data = {
    labels: ["Total", "users", "nounous"],
    datasets: [
      {
        label: "Utilisateurs",
        data: [total, users, nounous],
        backgroundColor: ["green", "blue", "red"],
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
    <div>
      <h1 className=" font-bold px-4 pt-8">UTILISATEURS</h1>
      <div class="float-left ">
        <div className="w-80 md:w-96  bg-slate-300 m-2">
          {/* <h1 className=" text-2xl font-bold text-center pt-5">
            UTILISATEURS{" "}
          </h1> */}

          <div className="m-3 flex justify-center gap-3">
            <label>Type</label>
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
      </div>

      <p className="p-4">
        Lorem ipsum dolor sit amet. Qui odit sapiente ea voluptate vero sed
        voluptas odit et voluptatem architecto ab ipsam impedit aut ratione
        enim. Est repellendus voluptates et ratione amet ut ducimus libero aut
        omnis quia? Ab deserunt omnis et nemo quam ut vitae possimus id sint
        aspernatur ea enim mollitia. Aut quis quia sed vero facere aut optio
        pariatur et tenetur similique et autem incidunt. Sed dolores odit et
        optio expedita et beatae voluptatem eos voluptatem quaerat? Et rerum
        minima qui reprehenderit blanditiis id modi blanditiis qui fuga eveniet
        ab quas tempora qui quos voluptatem sed voluptatem suscipit. Qui
        molestiae Quis et saepe atque quo reiciendis dignissimos aut dolorem
        esse.
      </p>
    </div>
  );
};

export default UsersDiagramme;
