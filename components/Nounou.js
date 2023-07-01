import React, { useEffect, useState } from "react";
import ImageSrc from "./ImageSrc";
import Message from "./Message";
import Agenda from "./Agenda";
import Link from "next/link";
import { useAppContext } from "./AppContext";
import { FaPhone } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import api from "../services/api";
import { useAppContextNounou } from "./AppContextNounou";
import Page from "./Page";
import Header from "./Header";
import { db } from "./FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Dashboard from "./Dashboard";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const Nounou = () => {
  const { idContact } = useAppContext();
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  const {
    state: { session },
  } = useAppContext();

  const [nounou, setNounou] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { result },
      } = await api.get(`/api/nounous/${idContact}`);
      setNounou(result);
    })();
  }, [idContact]);

  // Get image nounous de firebase
  useEffect(() => {
    const articleRef = collection(db, "nounous");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(images);
    });
  }, []);

  return (
    <Dashboard>
      {/* <div className="bg-slate-200 pb-16 pt-10 sm:pb-24 sm:pt-32 xl:pb-32"> */}
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0 mt-10 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-center">
          <div className="mt-10 xl:mt-0 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className=" ">
              {/* <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                /> */}
              <div>
                {images.map((image) => (
                  <div key={image.id} className=" ">
                    {image.id === idContact && (
                      <ImageSrc
                        src={`${image.imageUrl}`}
                        alt="image nounou"
                        width={100}
                        height={100}
                        className="  h-full w-full rounded-2xl  object-cover shadow-2xl "
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-10">
            <h1 className="text-3xl first-letter:uppercase first-letter:text-5xl font-semibold leading-8 text-white sm:text-3xl sm:leading-9">
              {nounou.username}
            </h1>
            <p className="text-sm text-gray-200 first-letter:uppercase ">
              {nounou.localite}
            </p>
            <figure className="relative isolate pt-6 sm:pt-">
              {/* <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum.
                </p>
              </blockquote> */}
              <figcaption className="mt- text-base ">
                <div className=" flex flex-col gap-3 text-white sm:w-80">
                  <div className="flex gap-5 justify-between items-center">
                    {/* <a href={`mailto:${nounou.email}`}>
                      <RiMailSendFill />
                    </a> */}
                    <p className="">{nounou.email} </p>
                    <a
                      href={`mailto:${nounou.email}`}
                      className="flex items-center justify-center gap-x-2 rounded-bl-lg   text-sm font-semibold text-white"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                  <div className="w-full flex justify-between items-center ">
                    {/* <a href={`tel:${nounou.telephone}`}>
                      <FaPhone />
                    </a> */}
                    <p className="">{nounou.telephone}</p>
                    <a
                      href={`tel:${nounou.telephone}`}
                      className="flex items-center justify-center gap-x-2 rounded-br-lg  text-sm font-semibold text-white"
                    >
                      <PhoneIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      Call
                    </a>
                  </div>
                  {session ? (
                    <div>
                      <Message nounouId={idContact} />
                    </div>
                  ) : null}
                </div>
                {/* <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Workcation</div> */}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div>
        {
          session || sessionNounou ? (
            <div>
              <div className="flex flex-col items-center gap-5 mt-10 ">
                <div>
                  {images.map((image) => (
                    <div key={image.id} className=" ">
                      {image.id === idContact && (
                        <ImageSrc
                          src={`${image.imageUrl}`}
                          alt="image nounou"
                          width={180}
                          height={180}
                          className="w-64 h-48 rounded-xl"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  {" "}
                  <h1 className="text-2xl font-bold text-gray-900 first-letter:uppercase first-letter:text-3x ">
                    {nounou.username}
                  </h1>
                  <p className="text-sm text-gray-500 first-letter:uppercase ">
                    {nounou.localite}
                  </p>
                </div>

                <div className=" flex flex-col gap-3 ">
                  <div className="flex gap-5 justify-between items-center">
                    {/* <a href={`mailto:${nounou.email}`}>
                      <RiMailSendFill />
                    </a> */}
                    <p className="">{nounou.email} </p>
                    <a
                      href={`mailto:${nounou.email}`}
                      className="flex items-center justify-center gap-x-2 rounded-bl-lg   text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                  <div className="w-full flex justify-between items-center ">
                    {/* <a href={`tel:${nounou.telephone}`}>
                      <FaPhone />
                    </a> */}
                    <p className="">{nounou.telephone}</p>
                    <a
                      href={`tel:${nounou.telephone}`}
                      className="flex items-center justify-center gap-x-2 rounded-br-lg  text-sm font-semibold text-gray-900"
                    >
                      <PhoneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Call
                    </a>
                  </div>
                  {session ? (
                    <div>
                      <Message nounouId={idContact} />
                    </div>
                  ) : null}
                </div>

                <div className="pt-5">
                  <Agenda />
                </div>
              </div>
            </div>
          ) : null
          // <div className="bg-slate-50 w-80 h-80  shadow-lg shadow-black ">

          //   <div className="flex flex-col items-center justify-center gap-5 p-5">
          //     <p className="text-center">
          //       vous n&rsquo; ete pas connecter, vous deveraiez vous connecter
          //       pour contacter les nounous
          //     </p>
          //     <Link
          //       className="bg-blue-600 active:bg-blue-300 rounded-xl p-2 text-white font-bold"
          //       href="/connexion"
          //     >
          //       connecter
          //     </Link>
          //   </div>
          // </div>
        }
      </div>
    </Dashboard>
  );
};

export default Nounou;
