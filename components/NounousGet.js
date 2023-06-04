import React, { useCallback, useEffect, useState } from "react";
import ImageSrc from "./ImageSrc";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import { useAppContext } from "./AppContext";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { useAppContextNounou } from "./AppContextNounou";
import api from "../services/api";
import { useRouter } from "next/router";
import { db } from "./FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { Fragment } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { EllipsisVerticalIcon, StarIcon } from "@heroicons/react/20/solid";

import Pagination from "./Pagination";
import StarClass from "./StarClass";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const initialValue = {
  adresse: "",
};

const NounousGet = () => {
  const router = useRouter();

  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const {
    state: { session },
  } = useAppContext();

  const { setNounouIdC1, setIdContact } = useAppContext();
  const [nounous, setNounous] = useState(null);
  const [adresse, setAdresse] = useState("");
  const [services, setServices] = useState([]);
  const [nounouService, setNounouService] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const n = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const onClose = () => {
    setOpenModal(false);
  };

  // Get image nounous de firebase
  useEffect(() => {
    const articleRef = collection(db, "nounous");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(images);
    });
  }, []);
  //fin

  const handleClickComment = async (event) => {
    const nounouId = Number(event.currentTarget.getAttribute("data-id"));
    setNounouIdC1(nounouId);
  };
  const handleClearSearch = useCallback(() => {
    (async () => {
      const {
        data: { result },
      } = await api.get("/api/nounous");
      setNounous(result);
      setAdresse("");
    })();
  }, []);

  const handelFilter = useCallback(async ({ adresse }) => {
    if (adresse === "") {
      const {
        data: { result },
      } = await api.get("/api/nounous");
      setNounous(result);
      return;
    }

    const {
      data: { result },
    } = await api.get(`/api/adresse/${adresse.toLowerCase()}`);
    setNounous(result);
    setAdresse(adresse);
  }, []);

  useEffect(() => {
    (async () => {
      const {
        data: { result },
      } = await api.get("/api/nounous");
      setNounous(result);
    })();
  }, []);

  const handleClickContact = async (event) => {
    const nounouId = Number(event.currentTarget.getAttribute("data-id"));

    if (!session && !sessionNounou) {
      setOpenModal(true);
      return;
    }
    setIdContact(nounouId);
    router.push("/nounou-page");
  };

  const handleClickServices = async (event) => {
    const hiddenFields = ["nounouId", "createdAt", "updatedAt"];
    const nounouId = Number(event.currentTarget.getAttribute("data-id"));
    const {
      data: { result1 },
    } = await api.get(`/api/services/${nounouId}`);

    const servicefiltre = result1.map((row) =>
      Object.fromEntries(
        Object.entries(row).filter(([field]) => !hiddenFields.includes(field))
      )
    );
    setServices(servicefiltre);
    setOpen(true);
    // setOpenModalServices(true);
    const {
      data: { result },
    } = await api.get(`/api/nounous/${nounouId}`);
    setNounouService(result);
  };

  if (!nounous) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center pt-20 rounded-full ">
        <ImageSrc
          width="200"
          height="200"
          src="/images/ico-triste.jpg"
          className="rounded-full"
          alt="image"
        />
        No Nounous ! Sorry
      </div>
    );
  }

  // Pagination

  const lastPostIndex = currentPage * postsPerPage;
  const firstpostindex = lastPostIndex - postsPerPage;
  const currentPosts = nounous.slice(firstpostindex, lastPostIndex);
  const totalPages = Math.ceil(nounous.length / postsPerPage);

  console.log(currentPosts);
  return (
    <div className=" overflow-y-auto flex flex-col items-center ">
      <div className=" flex  justify-center my-10">
        <div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <Formik onSubmit={handelFilter} initialValues={initialValue}>
                    <Form>
                      <Field
                        className=" block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:bg-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                        name="adresse"
                      />
                      {adresse ? (
                        <button
                          type="button"
                          onClick={handleClearSearch}
                          className="absolute bottom-1.5 right-3 tex font-bold text-gray-500 bg-gray-100 px-1 rounded-full "
                        >
                          x{/* <BiX className="w-5 h-5" /> */}
                        </button>
                      ) : null}
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ****************************************************** */}
      <ul
        role="list"
        className="w-full divide-y divide-gray-100 bg-slate-300 rounded-t-xl pb-2 "
      >
        {currentPosts.map((nounou) => (
          <li
            key={nounou.id}
            className=" flex justify-between gap-x-6 p-5 sm:px-20"
          >
            <div className="flex items-center gap-x-4">
              <div>
                {images.map((image) => (
                  <div key={image.imageUrl}>
                    {image.id === nounou.id && (
                      <ImageSrc
                        src={`${image.imageUrl}`}
                        alt="image nounou"
                        width={180}
                        height={180}
                        className="h-12 md:h-20 w-12 md:w-20 flex-none rounded-full bg-gray-50"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <button
                    onClick={handleClickServices}
                    data-id={nounou.id}
                    className="hover:underline first-letter:uppercase hover:text-blue-500"
                  >
                    {nounou.username}
                  </button>
                </p>

                {/* ///////////// STAR ///////////// */}
                <StarClass n={nounou.star} />
                {/* //////////////////////////////// */}

                <p className="mt-1 flex text-xs leading-5 text-gray-500 first-letter:uppercase first-line:uppercase">
                  {nounou.localite.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="w-64 text-xs text-end leading-6 text-gray-900">
                  {nounou.situation}
                </p>

                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Disponible</p>
                </div>
              </div>
              <Menu as="div" className="relative flex-none">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-5 -top-5 z-50 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                          onClick={handleClickContact}
                          data-id={nounou.id}
                        >
                          Contacter
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/comments"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                          onClick={handleClickComment}
                          data-id={nounou.id}
                        >
                          Commentaire
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
      {/* ********************* Pagination *************************** */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      {/* ************************************************************** */}
      {nounous.length === 0 ? (
        <div className="flex flex-col justify-center items-center ">
          <ImageSrc
            width="200"
            height="200"
            src="/images/ico-triste.jpg"
            alt="triste"
            className="bg-slate-200 rounded-full"
          />
          No Nounous ! Sorry
        </div>
      ) : null}

      {/* model no session => no nounouPage */}

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Vous n&rsquo;êtes pas connecté, vous devez vous
                          connecter pour accéder aux profils des nounous!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/connexion"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      // onClick={onClose}
                    >
                      Connexion
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex  items-center justify-center">
                      {images.map((image) => (
                        <div key={image.id}>
                          {image.id === nounouService.id && (
                            <ImageSrc
                              src={`${image.imageUrl}`}
                              alt="image nounou"
                              width={180}
                              height={180}
                              className="h-12 md:h-20 w-12 md:w-20 flex-none rounded-full bg-gray-50"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {nounouService.username?.toUpperCase()}
                      </Dialog.Title>
                      <div className="mt-2">
                        {services.length === 0 ? (
                          <p>No service defined ...</p>
                        ) : (
                          <ul className="  ">
                            <h1 className="p-2 text-2xl font-bold text-center ">
                              Services
                            </h1>
                            {services.map((service) => (
                              <li
                                key={service.id}
                                className="flex flex-col gap-3 odd:bg-red-300  "
                              >
                                {console.log(service.id)}
                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service1 ? (
                                    <BiRightArrowAlt />
                                  ) : null}{" "}
                                  {service.service1}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service2 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service2}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service3 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service3}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service4 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service4}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service5 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service5}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service6 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service6}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {" "}
                                  {service.service7 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service7}
                                </h1>

                                <h1 className="px-2 flex gap-2 text-sm text-gray-500   bg-red-">
                                  {service.service8 ? (
                                    <BiRightArrowAlt />
                                  ) : null}
                                  {service.service8}
                                </h1>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default NounousGet;
