import React, { useCallback, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router.js";
import { AxiosError } from "axios";

import { BiShowAlt, BiLowVision } from "react-icons/bi";
import Link from "next/link";

import api from "../services/api";
import Dashboard from "../components/Dashboard";
import ImageSrc from "../components/ImageSrc";
import validationSchema from "../components/validateurs/Valitateur";
import AddImage from "../components/AddImageToFirebase";

import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../components/FirebaseConfig";

const initialValues = {
  username: "",
  telephone: "",
  email: "",
  localite: "",
  type: "",
  image: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  name1: false,
  name2: false,
  name3: false,
  name4: false,
  name5: false,
  name6: false,
  name7: false,
  name8: false,
};
const initialValues1 = {
  number: 0,
};
const SignUpNounous = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisiblity] = useState(false);
  const [visible1, setVisiblity1] = useState(false);

  const [formData, setFormData] = useState({
    id: 0,
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleImageChange = (e) => {
    console.log(e.target.files);
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const onClose = () => {
    setOpenModal(false);
  };
  const router = useRouter();
  const [checkedValue, setValue] = useState([]);

  const hadleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setValue((pre) => [...pre, value]);
    } else
      setValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  };
  const service1 = checkedValue[0];
  const service2 = checkedValue[1];
  const service3 = checkedValue[2];
  const service4 = checkedValue[3];
  const service5 = checkedValue[4];
  const service6 = checkedValue[5];
  const service7 = checkedValue[6];
  const service8 = checkedValue[7];

  const handleSubmit = useCallback(
    async ({ email, username, telephone, password, localite, type }) => {
      const situation = type;
      console.log({ email, username, telephone, password, localite, type });
      const {
        data: { result },
      } = await api.post("/api/nounous", {
        email,
        username,
        telephone,
        localite: localite.toLowerCase(),
        situation,
        password,
      });

      const nounouId = result.id;

      const {
        data: { result1 },
      } = await api.post("/api/services", {
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

      // Stock Image in firebase
      if (!formData.image) {
        alert("Add image please");
        return;
      }

      const storageRef = ref(
        storage,
        `/images/${Date.now()}${formData.image.name}`
      );

      const uploadImage = uploadBytesResumable(storageRef, formData.image);

      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {
          console.log(err);
        },
        () => {
          setFormData({
            id: "",
            image: "",
          });

          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const articleRef = collection(db, "nounous");
            addDoc(articleRef, {
              id: nounouId,
              imageUrl: url,
              createdAt: Timestamp.now().toDate(),
            })
              .then(() => {
                alert("Article added successfully");
              })
              .catch((err) => {
                alert("Error adding article");
              });
          });
        }
      );

      // fin firebase

      router.push("/sign-in-nounous");
    },

    [
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service7,
      service8,
      router,
      formData,
    ]
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
          <p className="-mt-5 mb-5 text-center text-sm text-gray-500">
            Déjà membre?{" "}
            <Link
              className="hover:underline font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              href="/sign-in-nounous"
            >
              {" "}
              se connecter
            </Link>
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
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

            {/* LOCALITE */}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Localite
              </label>
              <div className="mt-1 flex flex-col">
                <Field
                  name="localite"
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="localite"
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

            {/* ////////////// */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                image{" "}
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                situation
              </label>

              <Field
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                as="select"
                name="type"
              >
                <option value="">selectionner votre situation</option>
                <option value="Professionnelle de la Petite Enfance">
                  Professionnelle de la Petite Enfance
                </option>
                <option value="Etudiante">Etudiante</option>
                <option value="Salariée à temps partiel">
                  Salariée à temps partiel
                </option>
                <option value="Jeune retraitée">Jeune retraitée</option>
                <option value="Autre">Autre</option>
              </Field>
              <ErrorMessage
                name="type"
                component="small"
                className="text-red-600"
              />
            </div>
            {/* kkkkkkkkkkkkkkkkkkkkkk */}
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Services
              </label>
              <div className="flex flex-col gap-3  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ">
                <div>
                  <input
                    type="checkbox"
                    value="Garde d'enfant jour"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Garde d&rsquo;enfant jour
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Garde d'enfant nuit"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Garde d&rsquo;enfant nuit
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Garde d'enfant jour et nuit"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Garde d&rsquo;enfant jour et nuit
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Accompagnateur d'enfant"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Accompagnateur d&rsquo;enfant
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Soutien scolaire"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Soutien scolaire
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Garde d'enfant moins de 2 ans"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Garde d&rsquo;enfant moins de 2 ans
                  </span>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="Préparer à manger"
                    onChange={hadleChange}
                  />
                  <span className="px-2 text-sm text-gray-500">
                    Préparer à manger
                  </span>
                </div>
                <div>
                  {" "}
                  <input type="checkbox" value="autre" onChange={hadleChange} />
                  <span className="px-2 text-sm text-gray-500">autre</span>
                </div>
              </div>
            </div>

            {/* //////////////////// */}

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

              <div className="mt-1 flex flex-col">
                <div className=" flex items-center relative">
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
                <div className=" flex items-center relative">
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
                    <button className="underline pl-1">
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
          </Form>
        </Formik>
      </div>
    </Dashboard>
  );
};

export default SignUpNounous;
