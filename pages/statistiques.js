import React from "react";
import Header from "../components/Header";
import UsersDiagramme from "../components/UsersDiagramme";
import CommentDiagramme from "../components/CommentDiagramme";
import NounousGenreDiagramme from "../components/NounousGenreDiagramme";
import Dashboard from "../components/Dashboard";

const Satistiques = () => {
  return (
    <Dashboard>
      <div className="bg-slate-200 p-1 rounded flex flex-col gap-5">
        <UsersDiagramme />
        <NounousGenreDiagramme />{" "}
        {/* <div className=" border">
          <h1 className="text-3xl font-bold px-4">COMMENTAIRES</h1>

          <div class="float-left">
            <CommentDiagramme />
          </div>

          <p className="p-4">
            Lorem ipsum dolor sit amet. Qui odit sapiente ea voluptate vero sed
            voluptas odit et voluptatem architecto ab ipsam impedit aut ratione
            enim. Est repellendus voluptates et ratione amet ut ducimus libero
            aut omnis quia? Ab deserunt omnis et nemo quam ut vitae possimus id
            sint aspernatur ea enim mollitia. Aut quis quia sed vero facere aut
            optio pariatur et tenetur similique et autem incidunt. Sed dolores
            odit et optio expedita et beatae voluptatem eos voluptatem quaerat?
            Et rerum minima qui reprehenderit blanditiis id modi blanditiis qui
            fuga eveniet ab quas tempora qui quos voluptatem sed voluptatem
            suscipit. Qui molestiae Quis et saepe atque quo reiciendis
            dignissimos aut dolorem esse.
          </p>
        </div> */}
      </div>
    </Dashboard>
  );
};

export default Satistiques;
