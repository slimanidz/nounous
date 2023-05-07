import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import UsersDiagramme from "../components/UsersDiagramme";
import CommentDiagramme from "../components/CommentDiagramme";
import NounousGenreDiagramme from "../components/NounousGenreDiagramme";

const Satistiques = () => {
  return (
    <Page>
      <Header />
      <div className="">
        <h1 className="text-3xl font-bold px-4">UTILISATEURS</h1>
        <div class="float-left">
          <UsersDiagramme />
        </div>

        <p className="p-4">
          Lorem ipsum dolor sit amet. Qui odit sapiente ea voluptate vero sed
          voluptas odit et voluptatem architecto ab ipsam impedit aut ratione
          enim. Est repellendus voluptates et ratione amet ut ducimus libero aut
          omnis quia? Ab deserunt omnis et nemo quam ut vitae possimus id sint
          aspernatur ea enim mollitia. Aut quis quia sed vero facere aut optio
          pariatur et tenetur similique et autem incidunt. Sed dolores odit et
          optio expedita et beatae voluptatem eos voluptatem quaerat? Et rerum
          minima qui reprehenderit blanditiis id modi blanditiis qui fuga
          eveniet ab quas tempora qui quos voluptatem sed voluptatem suscipit.{" "}
          Qui molestiae Quis et saepe atque quo reiciendis dignissimos aut
          dolorem esse.
        </p>
      </div>

      <div className=" border-2 border-black">
        <h1 className="text-3xl font-bold px-4">NOUNOUS PAR SITUATIONS</h1>

        <div className="float-right">
          <NounousGenreDiagramme />{" "}
        </div>
        <p className="p-4">
          Lorem ipsum dolor sit amet. Qui odit sapiente ea voluptate vero sed
          voluptas odit et voluptatem architecto ab ipsam impedit aut ratione
          enim. Est repellendus voluptates et ratione amet ut ducimus libero aut
          omnis quia? Ab deserunt omnis et nemo quam ut vitae possimus id sint
          aspernatur ea enim mollitia. Aut quis quia sed vero facere aut optio
          pariatur et tenetur similique et autem incidunt. Sed dolores odit et
          optio expedita et beatae voluptatem eos voluptatem quaerat? Et rerum
          minima qui reprehenderit blanditiis id modi blanditiis qui fuga
          eveniet ab quas tempora qui quos voluptatem sed voluptatem suscipit.{" "}
          Qui molestiae Quis et saepe atque quo reiciendis dignissimos aut
          dolorem esse.
        </p>
      </div>
      <div className=" border">
        <h1 className="text-3xl font-bold px-4">COMMENTAIRES</h1>

        <div class="float-left">
          <CommentDiagramme />
        </div>

        <p className="p-4">
          Lorem ipsum dolor sit amet. Qui odit sapiente ea voluptate vero sed
          voluptas odit et voluptatem architecto ab ipsam impedit aut ratione
          enim. Est repellendus voluptates et ratione amet ut ducimus libero aut
          omnis quia? Ab deserunt omnis et nemo quam ut vitae possimus id sint
          aspernatur ea enim mollitia. Aut quis quia sed vero facere aut optio
          pariatur et tenetur similique et autem incidunt. Sed dolores odit et
          optio expedita et beatae voluptatem eos voluptatem quaerat? Et rerum
          minima qui reprehenderit blanditiis id modi blanditiis qui fuga
          eveniet ab quas tempora qui quos voluptatem sed voluptatem suscipit.{" "}
          Qui molestiae Quis et saepe atque quo reiciendis dignissimos aut
          dolorem esse.
        </p>
      </div>
    </Page>
  );
};

export default Satistiques;
