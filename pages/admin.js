import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard";

const Admin = () => {
  return (
    <Dashboard>
      <h1 className="flex justify-center p-10 text-2xl font-bold">Comptes</h1>
      <section className="flex gap-3">
        <div className="w-1/2 flex flex-col items-center justify-center">
          {/* <h1 className=" text-2xl font-bold"></h1> */}
          <Link
            href="/users/users-get"
            className="bg-blue-600 text-white p-2 rounded-xl w-1/2 text-center font-bold text-xl my-2"
          >
            USERS
          </Link>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          {/* <h1 className=" text-2xl font-bold"></h1> */}
          <Link
            href="/nounous-get"
            className="bg-blue-600 text-white p-2 rounded-xl w-1/2 text-center font-bold text-xl my-2"
          >
            NOUNOUS
          </Link>
        </div>
      </section>
    </Dashboard>
  );
};

export default Admin;
