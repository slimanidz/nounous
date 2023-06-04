import React, { Fragment, useCallback, useState } from "react";
import Dashboard from "../components/Dashboard";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import ImageSrc from "../components/ImageSrc";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import { Dialog, Transition } from "@headlessui/react";

const initialValues = {
  email: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Email non valide").required("Email obligatoire"),
});

const PasswordForget = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = useCallback(async ({ email }) => {
    if (!email) {
      return;
    }
    setOpenModal(true);
    const {
      data: { result },
    } = await api.get(`/api/users/email/${email}`);
    const id = result.id;

    if (result.length !== 0) {
      try {
        const { data } = await api.post(`/api/send-email`, {
          email,
          id,
        });
        // eslint-disable-next-line no-console
        console.log("msg sended");
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }, []);
  return (
    <Dashboard>
      <div className=" h-full flex justify-center pt-20 pb-32 md:pt-[5%]">
        <div className="md:w-[50%] ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-10">
            <ImageSrc
              src="/logo/logo-nounous.png"
              width="200"
              height={32}
              className="mx-auto h-20 md:h-32 w-auto"
              alt="logo-nounous"
            />
          </div>
          <p className="text-sm text-gray-500 text-center font-extrabold">
            Merci d&rsquo;inserer votre e-mail d&rsquo;inscription, nous vous
            enverrons un e-mail avec un lien pour réinitialiser votre mot de
            passe.
          </p>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-3 items-center">
              <div className="w-full relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Votre e-mail"
                />
              </div>
              <button
                type="submit"
                className="flex w-full md:w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      {/* ////////////////////////////////////////////////// */}

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
                          Merci ! Si vous avez un compte avec cette E-mail, nous
                          vous enverrons un e-mail avec un lien pour
                          réinitialiser votre mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpenModal(false)}
                    >
                      Ok
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
};

export default PasswordForget;
