import React, { useEffect, useState } from "react";
import api from "../services/api";


export default function Home() {
  console.log("hhhhhhh")
  useEffect(() => {
    (async () => {
      const {
        data: { result, count  },
      } = await api.get(`/api/users`);
console.log(result)    
console.log(count)    
})();
  }, []);

  return (
    <div className="flex flex-col">hellooooo

      <a href="/addUsers">Add Users</a>
      <a href="/sign-In">connexion</a>


    </div>
  );
}
