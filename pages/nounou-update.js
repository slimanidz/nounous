import { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../components/AppContext";
import { useAppContextNounou } from "../components/AppContextNounou";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Modal from "../components/Modal";
import Page from "../components/Page";
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
  console.log({ sessionNounou: sessionNounou });
  const router = useRouter();
  // const [user, setUser] = useState([]);
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
      console.log({ password: password });
      const email1 = data.email1;
      const username1 = data.username1;
      const telephone1 = data.telephone1;

      console.log({ donnes: { email1, username1, telephone1 } });

      if (!email1 & !username1 & !telephone1) {
        return;
      }

      if (sessionNounou) {
        console.log(123);
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
          console.log("ERROR");
          console.log(active);
          return;
        }
        console.log(resultChecNounou);
        setActive(false);

        ///////////
        console.log({ email1, username1, telephone1, nounouId });

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
            // const password = password1;
            console.log(password);
            const {
              data: {
                result: [{ jwt }],
              },
            } = await api.post("/api/sign-in-nounous", { email, password });
            setSessionNounou(jwt);

            console.log(1234);
            // resetForm();
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
    <Page>
      <div className=" h-full  flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  ">
        <Header className="" />
        <div className=" py-10">
          {/* <ImageSrc src="/images/logo/F1.png" className="w-48 h-15" /> */}
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
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
                <label>email :</label>
                <Field
                  type="email"
                  name="email1"
                  // placeholder={`${sessionNounou.email}`}
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="email1"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>Username :</label>
                <Field
                  type="text"
                  name="username1"
                  // placeholder={`${sessionNounou.username}`}
                  className="border-2 border-black px-2 rounded "
                />
                <ErrorMessage
                  name="username1"
                  component="small"
                  className="text-red-600 "
                />
              </div>

              <div className="flex flex-col">
                <label>Telephone :</label>
                <Field
                  type="number"
                  name="telephone1"
                  // placeholder={`${sessionNounou.telephone}`}
                  className="border-2 border-black px-2 rounded"
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
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                >
                  Modifie
                </button>
                <Link
                  className="p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded"
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
    </Page>
  );
};

export default UserPatch;