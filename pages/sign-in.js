import React, { useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router.js";
import { AxiosError } from "axios";
import { BiShowAlt, BiLowVision } from "react-icons/bi";
import api from "../services/api";
import Link from "next/link";

import { useAppContext } from "../components/AppContext";
import Page from "../components/Page";
import ImageSrc from "../components/ImageSrc";
import validationSchemaSignIn from "../components/validateurs/validationSchemaSignIn";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const { setSession } = useAppContext();
  const [errors, setErrors] = useState([]);
  const [visible, setVisiblity] = useState(false);

  // const {
  //   actions: { signIn },
  // } = useAppContext();

  // const handleSubmit = useCallback(
  //   async ({ email, password }) => {
  //     try {
  //       const { status } = await signIn(email, password);

  //       if (status !== API_STATUS_CONNECT) {
  //         throw new Error("erreur dans le formulaire !");
  //       }

  //       router.push("/questionnaire");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   },
  //   [router, signIn]
  // );

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
    <Page>
      <div className="h-full flex flex-col">
        <div className=" grow flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500 ">
          <div className=" py-10">
            <ImageSrc
              src="/logo/logo-nounous.png"
              width="200"
              height={32}
              className="w-48 h-15"
              alt="logo-nounous"
            />
          </div>
          <div className="bg-white p-10  rounded-xl shadow-lg shadow-white">
            <h1 className=" text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Sign-In
            </h1>

            {errors.length ? (
              <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchemaSignIn}
            >
              <Form>
                <div className="flex flex-col">
                  <label>Email *:</label>
                  <Field
                    type="email"
                    name="email"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Mot de passe *:</label>
                  <div className="flex items-center justify-between border-2 border-black rounded bg-white">
                    <Field
                      type={visible ? "text" : "password"}
                      name="password"
                      className=" px-2 w-full"
                    />
                    {visible ? (
                      <span onClick={handleVesionOn}>
                        <BiLowVision className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                      </span>
                    ) : (
                      <span onClick={handleVisionOff}>
                        <BiShowAlt className=" w-6 h-6 hover:text-red-600 hover:cursor-pointer" />
                      </span>
                    )}{" "}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex gap-3 my-3">
                  <button
                    type="submit"
                    className="p-2 group relative text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                  >
                    <span class="absolute inset-y-0 left-0 flex items-center ">
                      <svg
                        class="h-5 w-5 text-indigo-700 group-hover:text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="pl-4">sign-in</span>
                  </button>
                  <Link
                    href="/sign-up"
                    className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded hover:underline"
                  >
                    cree un compte
                  </Link>
                  <Link
                    href="/password-forget"
                    className="p-2 text-blue-700 hover:underline"
                  >
                    mot de passe oublie ?
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Page>
  );
};

export default SignIn;
