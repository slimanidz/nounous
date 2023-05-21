import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useAppContextNounou } from "../components/AppContextNounou";
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
    state: { sessionNounou },
    setSessionNounou,
  } = useAppContextNounou();
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);

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

  ///////playcolder

  // useEffect(() => {
  //   (async () => {
  //     const {
  //       data: { result },
  //     } = await api.get(`/api/users/${sessionNounou.email}`);
  //     setUser(result);
  //   })();
  // }, [sessionNounou]);

  const handleSubmit = useCallback(
    async ({ password }) => {
      setErrors([]);
      const email1 = data.email1;
      const username1 = data.username1;
      const telephone1 = data.telephone1;

      if (!email1 & !username1 & !telephone1) {
        return;
      }

      if (sessionNounou) {
        const nounouId = sessionNounou.email;

        const email = sessionNounou.email;

        /////////checPassword
        const {
          data: { resultChecNounou },
        } = await api.post("/api/chec-password-nounou", {
          email,
          password,
        });
        if (!resultChecNounou) {
          setActive(true);
          return;
        }
        setActive(false);

        ///////////

        try {
          const {
            data: { result },
          } = await api.patch(`/api/nounous/${nounouId}`, {
            email1,
            username1,
            telephone1,
          });

          if (result.length !== 0) {
            const email = result[0].email;
            const {
              data: {
                result: [{ jwt }],
              },
            } = await api.post("/api/sign-in-nounous", { email, password });
            setSessionNounou(jwt);

            router.push("/setting");
            setOpenModal(false);

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
    [data.email1, data.telephone1, data.username1, sessionNounou, active]
  );

  return (
    <Dashboard>
      <div className=" h-full  flex flex-col items-center bg-slate-200 rounded ">
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold my-20  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Update
            </h1>
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
            <Form>
              <div className="flex flex-col">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  email :
                </label>
                <Field
                  type="email"
                  name="email1"
                  // placeholder={`${sessionNounou.email}`}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="email1"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username :
                </label>
                <Field
                  type="text"
                  name="username1"
                  // placeholder={`${sessionNounou.username}`}
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
                  Telephone :
                </label>
                <Field
                  type="number"
                  name="telephone1"
                  // placeholder={`${sessionNounou.telephone}`}
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
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
