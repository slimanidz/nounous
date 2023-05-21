import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { BiRightArrowAlt } from "react-icons/bi";
import { useAppContextNounou } from "./AppContextNounou";
import { Form, Formik } from "formik";
import ImageSrc from "./ImageSrc";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

const initialValues = {
  name1: false,
  name2: false,
  name3: false,
  name4: false,
  name5: false,
  name6: false,
  name7: false,
  name8: false,
};

const ServiceGet = () => {
  const [services, setServices] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [checkedValue, setValue] = useState([]);
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const nounouId = sessionNounou.id;

  const hadleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setValue((pre) => [...pre, value]);
    } else
      setValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  };

  const service11 = checkedValue[0];
  const service21 = checkedValue[1];
  const service31 = checkedValue[2];
  const service41 = checkedValue[3];
  const service51 = checkedValue[4];
  const service61 = checkedValue[5];
  const service71 = checkedValue[6];
  const service81 = checkedValue[7];

  const checkedValue1 = [
    service11,
    service21,
    service31,
    service41,
    service51,
    service61,
    service71,
    service81,
  ];

  const values = checkedValue1.map((value) => {
    if (value === undefined) {
      return "";
    }
    return value;
  });

  const service1 = values[0];
  const service2 = values[1];
  const service3 = values[2];
  const service4 = values[3];
  const service5 = values[4];
  const service6 = values[5];
  const service7 = values[6];
  const service8 = values[7];

  const handleSubmit = useCallback(async () => {
    const {
      data: { result },
    } = await api.patch("/api/services", {
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service7,
      service8,
      nounouId,
    });
    if (result) {
      window.location.reload();
    }
  }, [
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
    nounouId,
  ]);

  const hiddenFields = [];
  useEffect(() => {
    (async () => {
      const {
        data: { result1 },
      } = await api.get(`/api/services/${nounouId}`);

      const servicefiltre = result1.map((row) =>
        Object.fromEntries(
          Object.entries(row).filter(([field]) => !hiddenFields.includes(field))
        )
      );
      setServices(servicefiltre);
    })();
  }, [nounouId]);
  if (!services) {
    return <p>Loading </p>;
  }
  const handleOpenModel = () => {
    setOpenModal(true);
  };
  const handleCloseModel = () => {
    setOpenModal(false);
  };

  return (
    <div className="block py-10">
      <h1 className="text-3xl font-bold">services</h1>
      <ul className=" bg-red-30">
        {services.length === 0 ? (
          <p>no services difined ...</p>
        ) : (
          <ul className="  ">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col gap-3 odd:bg-red-30 "
              >
                <h1
                  className={
                    service.service1
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  } // className="px-2 flex gap-2   bg-red-"
                >
                  {" "}
                  {service.service1 ? <BiRightArrowAlt /> : null}{" "}
                  {service.service1}
                </h1>

                <h1
                  className={
                    service.service2
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service2 ? <BiRightArrowAlt /> : null}
                  {service.service2}
                </h1>

                <h1
                  className={
                    service.service3
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service3 ? <BiRightArrowAlt /> : null}
                  {service.service3}
                </h1>

                <h1
                  className={
                    service.service4
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service4 ? <BiRightArrowAlt /> : null}
                  {service.service4}
                </h1>

                <h1
                  className={
                    service.service5
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service5 ? <BiRightArrowAlt /> : null}
                  {service.service5}
                </h1>

                <h1
                  className={
                    service.service6
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service6 ? <BiRightArrowAlt /> : null}
                  {service.service6}
                </h1>

                <h1
                  className={
                    service.service7
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {" "}
                  {service.service7 ? <BiRightArrowAlt /> : null}
                  {service.service7}
                </h1>

                <h1
                  className={
                    service.service8
                      ? " flex items-center gap-3 md:w-80 rounded border-0 p-2 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300   text-sm  md:text-lg "
                      : ""
                  }
                >
                  {service.service8 ? <BiRightArrowAlt /> : null}
                  {service.service8}
                </h1>
              </li>
            ))}
          </ul>
        )}
        <button
          className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
          type="button"
          onClick={handleOpenModel}
        >
          Modifier
        </button>
      </ul>

      {/* /////////////////  MODELE POUR MODIFIER LES SERVICES  /////////////////// */}

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
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
                    <div className="mt-3  sm:mt-5">
                      <Dialog.Title
                        as="h1"
                        className="text-xl text-center font-semibold leading-6 text-gray-900"
                      >
                        Choisi tes nouveaux services
                      </Dialog.Title>
                      <div className="mt-6">
                        <Formik
                          initialValues={initialValues}
                          onSubmit={handleSubmit}
                        >
                          <Form className="flex flex-col gap-5 pl-5 ">
                            <div>
                              <input
                                type="checkbox"
                                value="garde enfant jour"
                                onChange={hadleChange}
                              />
                              <span className="px-2">garde enfant jour</span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="garde enfant nuit"
                                onChange={hadleChange}
                              />
                              <span className="px-2">garde enfant nuit</span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="garde enfant jour et nuit"
                                onChange={hadleChange}
                              />
                              <span className="px-2">
                                garde enfant jour et nuit
                              </span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="recuperer l'enfant de l'ecole"
                                onChange={hadleChange}
                              />
                              <span className="px-2">
                                recuperer l&rsquo;enfant de l&rsquo;ecole
                              </span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="soutien scolaire"
                                onChange={hadleChange}
                              />
                              <span className="px-2">soutien scolaire</span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="garde enfant moin de 2 ans"
                                onChange={hadleChange}
                              />
                              <span className="px-2">
                                garde enfant moin de 2 ans
                              </span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="prepare a manger"
                                onChange={hadleChange}
                              />
                              <span className="px-2">prepare a manger</span>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value="autre"
                                onChange={hadleChange}
                              />
                              <span className="px-2">autre</span>
                            </div>
                            <div className="flex justify-end gap-3">
                              {" "}
                              <button
                                className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                                type="submit"
                              >
                                Confirm
                              </button>
                              <button
                                className=" rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 "
                                type="button"
                                onClick={handleCloseModel}
                              >
                                Annul
                              </button>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    </div>
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

export default ServiceGet;
