import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../components/AppContext";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Modal from "../components/Modal";
import Dashboard from "../components/Dashboard";
import validationSchemaPassword from "../components/validateurs/ValidatePassword";
import ValidationSchemaPatch from "../components/validateurs/ValidationSchemaPatch";
import api from "../services/api";

const initialValues = {
  username1: "",
  telephone1: "",
  email1: "",
};
const initialValues1 = { password1: "" };

const UserPatch = () => {
  const {
    state: { session },
    setSession,
  } = useAppContext();
  const router = useRouter();
  // const [user, setUser] = useState([]);
  const [errors, setErrors] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [telephone, setTelephone] = useState(false);

  const handleSubmit1 = ({ email1, username1, telephone1 }) => {
    if (!email1 && !username1 && !telephone1) {
      return;
    }
    setData({ email1, username1, telephone1 });
    setOpenModal(true);
  };

  const handleSubmitAnnul = () => {
    setOpenModal(false);
    setActive(false);
  };

  const handleSubmit = useCallback(
    async ({ password }) => {
      setErrors([]);
      console.log({ password: password });
      const email1 = data.email1;
      const username1 = data.username1;
      const telephone1 = data.telephone1;

      console.log({ donnes: { email1, username1, telephone1 } });

      if (!email1 & !username1 & !telephone1) {
        return;
      }

      if (session) {
        const userId = session.email;

        const email = session.email;

        /////////checPassword
        const {
          data: { resultchec },
        } = await api.post("/api/chec-password", {
          email,
          password,
        });
        if (!resultchec) {
          setActive(true);
          console.log("ERROR");
          console.log(active);
          return;
        }
        console.log(resultchec);
        setActive(false);

        ///////////

        try {
          const {
            data: { result },
          } = await api.patch(`/api/users/${userId}`, {
            email1,
            username1,
            telephone1,
          });

          if (result.length !== 0) {
            const email = result[0].email;
            // const password = password1;
            console.log(password);
            const {
              data: {
                result: [{ jwt }],
              },
            } = await api.post("/api/sign-in", { email, password });
            setSession(jwt);

            console.log(1234);
            // resetForm();
            // router.push("/");
            setOpenModal(false);
            if (email1) {
              setEmail(true);
            }
            if (username1) {
              setName(true);
            }
            if (telephone1) {
              setTelephone(true);
            }

            return;
          }
        } catch (err) {
          if (err instanceof AxiosError && err.response?.data?.error) {
            setErrors(err.response.data.error);

            return;
          }

          setErrors(["Oops. Something went wrong, please try again."]);
        }
      }
    },
    [data.email1, data.telephone1, data.username1, session, setSession, active]
  );

  return (
    <Dashboard>
      <div className=" h-screen  flex flex-col items-center bg-slate-200 rounded ">
        <div className=" py-10"></div>
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Update
            </h1>
            {email ? (
              <p className="text-green-700 ">Email modifier avec succe</p>
            ) : null}
            {name ? (
              <p className="text-green-700 ">Name modifier avec succe</p>
            ) : null}
            {telephone ? (
              <p className="text-green-700 ">Telephone modifier avec succe</p>
            ) : null}
          </div>
          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}

          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchemaPatch}
            onSubmit={handleSubmit1}
          >
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <Field
                  type="email"
                  name="email1"
                  // placeholder={`${user.email}`}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="email1"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col ">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <Field
                  type="text"
                  name="username1"
                  // placeholder={`${user.username}`}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="username1"
                  component="small"
                  className="text-red-600 "
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Telephone
                </label>
                <Field
                  type="number"
                  name="telephone1"
                  // placeholder={`${user.telephone}`}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="telephone1"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex gap-3 my-3 justify-between">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Modifie
                </button>
                <Link
                  className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href="/setting"
                >
                  Annule
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Modal
        className="w-screen h-screen bg-slate-5 flex justify-center items-center"
        open={openModal}
      >
        <div className="w-64 md:w-96 bg-slate-300  p-5  shadow-lg shadow-black ">
          <h1 className=" text-center  text-2xl ">confermer votre operation</h1>
          <div className=" ">
            <Formik
              initialValues={initialValues1}
              validationSchema={validationSchemaPassword}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col gap-3">
                <label>Password :</label>
                {active ? (
                  <p className="text-red-600 text-sm">Oooops! password erone</p>
                ) : null}

                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
                <button
                  type="submit"
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                >
                  conferme
                </button>
                <button
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                  onClick={handleSubmitAnnul}
                >
                  annul
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
    </Dashboard>
  );
};

export default UserPatch;
