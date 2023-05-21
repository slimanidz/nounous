import Head from "next/head";
import Link from "next/link";
import { useAppContextNounou } from "../components/AppContextNounou";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Modal from "../components/Modal";
import NounousGet from "../components/NounousGet";
import Page from "../components/Page";
import Nounous from "./nounous";
import Dashboard from "../components/Dashboard";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const {
    state: { sessionNounou },
    openModal,
    setOpenModal,
    setTimeOut,
  } = useAppContextNounou();

  const handleferme = () => {
    setOpenModal(false);
    setTimeOut(false);
  };

  const handleVide = () => {};

  const cancelButtonRef = useRef(null);

  return (
    <Dashboard>
      <Head>
        <title>Nounous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col  items-cente  grow overflow-y-auto">
        {/* <div className="bg-red-300 relative">
          <ImageSrc
            src="/images/bg-nounou.webp"
            width="1500"
            height="100"
            className="w-full md:h-[500px] "
            alt="bg-nounou"
          />
        </div> */}

        {/* {!sessionNounou ? ( */}
        <div>
          <NounousGet />
          {/* <Link href="/home">home</Link> */}
        </div>
        {/* ) : null} */}
        {/* {sessionNounou ? (
          <div>
            <Nounous />
          </div>
        ) : null} */}
      </div>

      {/*  Modal de accepte cookies */}

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={handleVide}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex h-full items-end justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[75%] sm:mx-5 sm:p-6">
                  <div className="w-full flex justify-end">
                    <button
                      onClick={handleferme}
                      className="text-sm text-gray-500 hover:underline hover:text-black"
                    >
                      Contunuer sans accepter
                    </button>
                  </div>
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Nounous et ses fournisseurs utilisent des cookies et
                          des technologies similaires pour améliorer votre
                          expérience et évaluer vos interactions avec nos sites
                          Web, produits et services. Nous les utilisons
                          également pour vous fournir des informations plus
                          pertinentes dans les recherches et dans les annonces
                          publicitaires sur ce site et sur d&rsquo;autres sites.
                          Si cela vous convient, cliquez sur « Accepter ». En
                          cliquant sur « Contunuer sans accepter », seuls les
                          cookies strictement nécessaires seront définis. Vous
                          pouvez également consulter nos fournisseurs et
                          personnaliser vos choix en cliquant sur « Paramètres
                          ».
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      // onClick={handleferme}
                    >
                      Accepter
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      // onClick={handleferme}
                      ref={cancelButtonRef}
                    >
                      Paramètres
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Dashboard>
  );
}
