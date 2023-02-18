import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";

const Admin = () => {
  return (
    <Page>
      <Header />
      <h1 className="flex justify-center p-10 text-2xl font-bold">
        Administrateurs
      </h1>
      <section className="flex gap-3">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className=" text-2xl font-bold">USERS</h1>
          <Link
            href="/users/users-get"
            className="bg-blue-600 text-white p-2 rounded-xl w-1/2 text-center font-bold text-xl my-2"
          >
            usersGet
          </Link>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className=" text-2xl font-bold">NOUNOUS</h1>
          <Link
            href="/users/users-get"
            className="bg-blue-600 text-white p-2 rounded-xl w-1/2 text-center font-bold text-xl my-2"
          >
            nounousGet
          </Link>
        </div>
      </section>
    </Page>
  );
};

export default Admin;