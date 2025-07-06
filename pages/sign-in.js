import React, { useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router.js";
import { AxiosError } from "axios";
import { BiShowAlt, BiLowVision } from "react-icons/bi";
import api from "../services/api";
import Link from "next/link";

import { useAppContext } from "../components/AppContext";
import Dashboard from "../components/Dashboard";
import ImageSrc from "../components/ImageSrc";
import validationSchemaSignIn from "../components/validateurs/validationSchemaSignIn";
import FooterPage from "../components/FooterPage";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const { setSession } = useAppContext();
  const [errors, setErrors] = useState([]);
  const [visible, setVisiblity] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      setErrors([]);

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/api/sign-in", { email, password });
        setSession(jwt);
        if (jwt) {
          router.push("/");
          console.log("is gign-in");
          return;
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error);

          return;
        }

        setErrors(["Oops. Something went wrong, please try again."]);
        console.log(err);
      }
    },
    [router, setSession]
  );

  const handleVisionOff = () => {
    setVisiblity(true);
  };
  const handleVesionOn = () => {
    setVisiblity(false);
  };

  return (
    <Dashboard>
      <div className="h-full flex min-h-full flex-1 flex-col justify- items-center px-6 pt-20 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ImageSrc
            src="/logo/logo-nounous.png"
            width="200"
            height={32}
            className="mx-auto h-20 w-auto"
            alt="logo-nounous"
          />
          <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mb-3 text-center text-red-500 font-bold leading-9 tracking-tight ">
            {errors}
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaSignIn}
          className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm "
        >
          <Form className="space-y-6  w-full sm:w-96 pb-20 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2 flex flex-col">
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="/password-forget"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 flex flex-col">
                <div className=" flex items-center relative">
                  <Field
                    name="password"
                    type={visible ? "text" : "password"}
                    className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />{" "}
                  {visible ? (
                    <span onClick={handleVesionOn}>
                      <BiLowVision className="absolute bottom-1.5 right-3 w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOff}>
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                href="/sign-up"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                créer un compte
              </Link>
            </p>
          </Form>
        </Formik>
        {/* <FooterPage /> */}
      </div>
    </Dashboard>
  );
};

export default SignIn;
