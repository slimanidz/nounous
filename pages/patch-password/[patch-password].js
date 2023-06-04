import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import ContreHashId from "../../src/contreHashId";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiShowAlt, BiLowVision } from "react-icons/bi";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Dashboard from "../../components/Dashboard";

const initialValues = {
  password: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Minimun 8 caractères")
    .required("Mot de passe obligatoire"),
});

const PatchPassword = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState([]);
  const [visible, setVisiblity] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (pathName) {
      const id = ContreHashId(pathName.slice(16, 60));
      (async () => {
        const {
          data: { result },
        } = await api.get(`/api/users/${id}`);
        setUser(result);
      })();
    }
  }, [pathName]);

  const handleSubmit = useCallback(
    async ({ password }) => {
      setErrors([]);

      try {
        const {
          data: { result },
        } = await api.put(`/api/users/${user.id}`, {
          password,
        });

        if (result.length !== 0) {
          router.push("/sign-in");

          return;
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error);

          return;
        }

        setErrors(["Oops. Something went wrong, please try again."]);
      }
    },
    [router, user.id]
  );

  const handleVisionOn = () => {
    setVisiblity(true);
  };
  const handleVisionOff = () => {
    setVisiblity(false);
  };

  return (
    <Dashboard>
      <div className="h-full flex flex-col items-center ">
        <h1 className="text-center text-3xl font-bold py-20">
          Update password
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
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form className="flex flex-col gap-4 ">
                <div className="flex flex-col">
                  <label className=" ">New password </label>
                  <div className="flex relative">
                    <Field
                      type={visible ? "text" : "password"}
                      name="password"
                      className=" block w-full rounded-md border-0 bg-white py-1.5 pl-3  pr-10 text-gray-900 focus:ring-2 focus:bg-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {visible ? (
                      <span onClick={handleVisionOff}>
                        <BiLowVision className="absolute bottom-1.5 right-3 w-5 h-5 hover:text-red-600 hover:cursor-pointer" />
                      </span>
                    ) : (
                      <span onClick={handleVisionOn}>
                        <BiShowAlt className="absolute bottom-1.5 right-3 w-5 h-5 hover:text-red-600 hover:cursor-pointer" />
                      </span>
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex gap-3 my-3 justify-center">
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      !formik.isValid &&
                      "flex w-full justify-center rounded-md bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                    } `}
                  >
                    Confirm
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Dashboard>
  );
};

export default PatchPassword;
