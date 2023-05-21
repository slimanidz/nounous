import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import { BsExclamationOctagon } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAppContext } from "../components/AppContext";
import api from "../services/api";
import Link from "next/link";
import { useAppContextNounou } from "../components/AppContextNounou";
import ServiceGet from "../components/sercivesGet";
import ServicesNounous from "../components/ServicesNounous";

const Setting = () => {
  const [isactive, setIsactive] = useState(false);
  const {
    state: { session },
    setSession,
  } = useAppContext();
  const {
    state: { sessionNounou },
    setSessionNounou,
  } = useAppContextNounou();
  const router = useRouter();
  const handelActive = () => {
    setIsactive(true);
  };
  const hendelAnnule = () => {
    setIsactive(false);
  };

  const handelDelete = useCallback(async () => {
    const {
      data: { result },
    } = await api.delete(`/api/users/${session.id}`);

    if (result) {
      setSession();
      router.push("/");

      return;
    }
  }, [router, session, setSession]);

  const handelDeleteNounou = useCallback(async () => {
    const {
      data: { result },
    } = await api.delete(`/api/nounous/${sessionNounou.id}`);

    if (result) {
      setSessionNounou();
      router.push("/");

      return;
    }
  }, [router, sessionNounou, setSessionNounou]);
  return (
    <Dashboard>
      <div className="p-10 bg-slate-200 h-screen rounded">
        <h1 className=" text-3xl font-bold mb-10">Settings</h1>
        <div>
          {session || sessionNounou ? (
            <div>
              {session ? (
                <div className="px-5 flex flex-col gap-5">
                  <div className="text-center font-bond underline">
                    {session.role === "ADMIN" ? (
                      <h1 className=" ske w-y-12">ADMINISRATOR</h1>
                    ) : (
                      <h1 className=" ske w-y-12">UTILISATEUR</h1>
                    )}
                  </div>
                  <h1>
                    Name{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-lg ">
                      {session.username}
                    </span>{" "}
                  </h1>
                  <h1>
                    Email{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm  md:text-lg ">
                      {session.email}
                    </span>
                  </h1>
                  <h1>
                    Telephone{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm  md:text-lg ">
                      {session.talephone}
                    </span>
                  </h1>
                  <div className="flex">
                    <div className="flex gap-5 justify-center">
                      <Link
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="/user-patch"
                      >
                        Modifier{" "}
                      </Link>
                      <button
                        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        isactive="isactive"
                        onClick={handelActive}
                      >
                        Delette
                      </button>
                    </div>

                    {isactive && (
                      <div className=" w-full h-screen absolute top-0 left-0  p-3 rounded-xl flex flex-col items-center ">
                        <section className="flex flex-col items-center gap-5 h-64 w-64 mt-[150px] pt-10  bg-gradient-to-b from-red-300 to-pink-300 rounded-2xl">
                          <BsExclamationOctagon className="w-20 h-20" />
                          <p className="text-black font-bold text-2xl pb-2 text-center animate-pin g ">
                            ARE YOU SUR !?
                          </p>
                          <div className="flex gap-5">
                            <button
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={hendelAnnule}
                            >
                              Annule
                            </button>
                            <button
                              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={handelDelete}
                            >
                              Confirme
                            </button>
                          </div>
                        </section>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="px-5 flex flex-col gap-5">
                  <div className="text-center font-bond underline">
                    <h1 className=" ske w-y-12">NOUNOU</h1>
                  </div>
                  <h1>
                    Name:{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm  md:text-lg ">
                      {sessionNounou.username}
                    </span>
                  </h1>
                  <h1>
                    email:{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm  md:text-lg ">
                      {sessionNounou.email}
                    </span>
                  </h1>
                  <h1>
                    Telephone:{" "}
                    <span className=" block md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm  md:text-lg ">
                      {sessionNounou.talephone}
                    </span>
                  </h1>
                  <div className="flex">
                    <div className="flex gap-5 justify-center">
                      <Link
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="/nounou-update"
                      >
                        Modifier{" "}
                      </Link>
                      <button
                        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        isactive="isactive"
                        onClick={handelActive}
                      >
                        delette
                      </button>
                    </div>

                    {isactive && (
                      <div className=" w-full h-screen absolute top-0 left-0  p-3 rounded-xl flex flex-col items-center ">
                        <section className="flex flex-col items-center gap-5 h-64 w-64 mt-[150px] pt-10  bg-gradient-to-b from-red-500 to-pink-500 rounded-2xl">
                          <BsExclamationOctagon className="w-20 h-20" />
                          <p className="text-black font-bold text-2xl pb-2 text-center animate-pin g ">
                            ARE YOU SUR !?
                          </p>
                          <div className="flex gap-5">
                            <button
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={hendelAnnule}
                            >
                              annule
                            </button>
                            <button
                              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={handelDeleteNounou}
                            >
                              Confirme
                            </button>
                          </div>
                        </section>
                      </div>
                    )}
                  </div>
                  {sessionNounou ? <ServiceGet /> : null}
                </div>
              )}
            </div>
          ) : (
            <div>
              <p className="text-red-700 text-3xl font-bold text-center">
                Not registered
              </p>
              <div className="mt-5 flex justify-center">
                <Link className="bg-blue-500 px-5 py-2" href="/connexion">
                  Sign-Up
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* <Contact /> */}
      </div>
    </Dashboard>
  );
};

export default Setting;
