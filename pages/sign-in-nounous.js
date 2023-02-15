import React, { useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router.js";
import { AxiosError } from "axios";
// import Link from "@/components/Link"
import { BiShowAlt, BiLowVision } from "react-icons/bi";

import Link from "next/link";
import api from "../services/api";
import { useAppContextNounou } from "../components/AppContextNounou";
import Page from "../components/Page";
import ImageSrc from "../components/ImageSrc";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const { setSessionNounou } = useAppContextNounou();
  const [errors, setErrors] = useState([]);
  const [visible, setVisiblity] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      setErrors([]);
      console.log({ email, password });

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/api/sign-in-nounous", { email, password });
        console.log(jwt);
        setSessionNounou(jwt);

        if (jwt) {
          router.push("/");
          console.log("sign-in");
          return;
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error);

          return;
        }
        console.log(err);
        setErrors(["Oops. Something went wrong, please try again."]);
      }
    },
    [setSessionNounou, router]
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
        <div className=" grow flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  ">
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
              Sign-In-Nounou
            </h1>

            {errors.length ? (
              <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className="flex flex-col">
                  <label>Email or username *:</label>
                  <Field
                    type="text"
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
                    className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
                  >
                    sign-in
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
