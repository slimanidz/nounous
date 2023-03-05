import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Page from "../components/Page";
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
    <Page>
      <Header />
      <div className="p-10">
        <h1 className=" text-3xl font-bold mb-10">Settings</h1>
        <div>
          <h1 className="text-xl font-bold">Profil:</h1>
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
                  <h1>Name: {session.username}</h1>
                  <h1>email: {session.email}</h1>
                  <h1>Telephone: {session.talephone}</h1>
                  <div className="flex">
                    <div className="flex gap-5 justify-center">
                      <Link
                        className="mt-5 p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                        href="/user-patch"
                      >
                        Modifier{" "}
                      </Link>
                      <button
                        className="mt-5 p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
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
                              className=" p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                              onClick={hendelAnnule}
                            >
                              annule
                            </button>
                            <button
                              className=" p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
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
                  <h1>Name: {sessionNounou.username}</h1>
                  <h1>email: {sessionNounou.email}</h1>
                  <h1>Telephone: {sessionNounou.talephone}</h1>
                  <div className="flex">
                    <div className="flex gap-5 justify-center">
                      <Link
                        className="mt-5 p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                        href="/nounou-update"
                      >
                        Modifier{" "}
                      </Link>
                      <button
                        className="mt-5 p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
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
                              className=" p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                              onClick={hendelAnnule}
                            >
                              annule
                            </button>
                            <button
                              className=" p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
                              onClick={handelDeleteNounou}
                            >
                              Confirme
                            </button>
                          </div>
                        </section>
                      </div>
                    )}
                  </div>
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
      {sessionNounou ? <ServiceGet /> : null}
    </Page>
  );
};

export default Setting;
