import React, { useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router.js";
import { AxiosError } from "axios";

import { BiShowAlt, BiLowVision } from "react-icons/bi";
import Link from "next/link";
import api from "../services/api";
import Dashboard from "../components/Dashboard";
import ImageSrc from "../components/ImageSrc";
import validationSchemaUsers from "../components/validateurs/ValidatuerUsers";

const initialValues = {
  username: "",
  telephone: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisiblity] = useState(false);
  const [visible1, setVisiblity1] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };

  const router = useRouter();

  const handleSubmit = useCallback(
    async ({ email, username, telephone, password }) => {
      const {
        data: { result },
      } = await api.post("/api/users", {
        email,
        username,
        telephone,
        password,
      });

      if (result) {
        // restform();
        router.push("/sign-in");

        return;
      }
    },

    [router]
  );

  const handleVisionOn = () => {
    setVisiblity(true);
  };
  const handleVisionOff = () => {
    setVisiblity(false);
  };

  const handleVisionOn1 = () => {
    setVisiblity1(true);
  };
  const handleVisionOff1 = () => {
    setVisiblity1(false);
  };

  return (
    <Dashboard>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-10 sm:py-20 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ImageSrc
            src="/logo/logo-nounous.png"
            width="200"
            height={32}
            className="mx-auto h-20 w-auto"
            alt="logo-nounous"
          />
          <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
          <p className="mb-3 text-center text-red-500 font-bold leading-9 tracking-tight ">
            {/* {errors} */}
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaUsers}
          className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm "
        >
          <Form className="space-y-3  w-full sm:w-96  ">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1 flex flex-col">
                <Field
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* USENAME */}

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-1 flex flex-col">
                <Field
                  name="username"
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="username"
                  component="small"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Telaphone */}

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Telephone
              </label>
              <div className="mt-1 flex flex-col">
                <Field
                  name="telephone"
                  type="number"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="telephone"
                  component="small"
                  className="text-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

              <div className="mt-1 flex flex-col">
                <div className="relative flex items-center">
                  <Field
                    name="password"
                    type={visible ? "text" : "password"}
                    className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />{" "}
                  {visible ? (
                    <span onClick={handleVisionOff}>
                      <BiLowVision className="absolute bottom-1.5 right-3 w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOn}>
                      <BiShowAlt className="absolute bottom-1.5 right-3 w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  )}
                </div>{" "}
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* CONFERME Password */}

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Conferme Password
              </label>

              <div className="mt-1 flex flex-col">
                <div className=" relative flex items-center">
                  <Field
                    name="confirmPassword"
                    type={visible1 ? "text" : "password"}
                    className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />{" "}
                  {visible1 ? (
                    <span onClick={handleVisionOff1}>
                      <BiLowVision className="absolute bottom-1.5 right-3 w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOn1}>
                      <BiShowAlt className="absolute bottom-1.5 right-3 w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  )}
                </div>{" "}
                <ErrorMessage
                  name="confirmPassword"
                  component="small"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* ACCEPTE TERME */}

            <div className="flex flex-col">
              <div>
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className=" pl-2 text-sm font-medium leading-6 text-gray-900">
                  J&rsquo;ai lu et j&rsquo;accepte
                  <span className="underline decoration-solid hover:text-indigo-600">
                    <button className="underline pl-1" onClick={handleClick}>
                      les conditions d&rsquo;utilisation
                    </button>
                  </span>
                </label>
              </div>
              <ErrorMessage
                name="acceptTerms"
                component="small"
                className="text-red-600"
              />
              <p className="text-sm text-gray-500">
                {" "}
                Tous les champs sont obligatoire
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Déjà membre?{" "}
              <Link
                className="hover:underline font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                href="/sign-in"
              >
                {" "}
                se connecter
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </Dashboard>
  );
};

export default SignUp;
