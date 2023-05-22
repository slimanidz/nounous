import Link from "next/link";
import React from "react";
import ImageSrc from "../components/ImageSrc";
import Dashboard from "../components/Dashboard";

const Conexion = () => {
  return (
    <Dashboard>
      <div className="py-10 flex flex-col justify-cente  gap-5">
        <div className="   w-full flex justify-center">
          <ImageSrc
            src="/logo/logo-nounous.png"
            width="200"
            height={32}
            className="w- md:w-64 h- md:h-48"
            alt="logo-nounous"
          />
        </div>
        <p className=" pb-10 text-center">
          Bienvenu dans votre application NOUNOUS <br /> Pour accéder à toutes
          les fonctionnalités de votre application vous pouvez vous connecter
          comme utilisateur si vous êtes chercheur d&rsquo; une nounous, comme
          vous pouvez vous connecter comme nounous si vous êtes une nounou!{" "}
        </p>
        <div className=" flex gap-5 justify-center">
          <div className="w-full flex flex-col items-center text-center gap-5 bg-red-30 ">
            <p>utilisateur clic ici</p>
            <Link
              href="/sign-up"
              className="flex w-full sm:w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Utilisateur
            </Link>
          </div>
          <div className="w-full flex flex-col items-center text-center gap-5">
            <p>nounou clic ici</p>
            <Link
              href="/sign-up-nounous"
              className="flex w-full  sm:w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Nounous
            </Link>
          </div>
        </div>
        {/* <div className="mt-20 bg-red-30 flex justify-center">
          <Link
            className="bg-blue-300 flex items-center justify-center p-2 rounded-xl hover:w-32 hover:h-20 hover:text-3xl hover:font-bold"
            href="/"
          >
            return
          </Link>
        </div> */}
      </div>
    </Dashboard>
  );
};

export default Conexion;
