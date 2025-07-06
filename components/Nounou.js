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
      <div className="bg-gray-90 pb-20 sm:pb-24 xl:pb-0 mt-10 ">
        <div className="mx-auto flex max-w-7xl flex-col items-cente gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 md:flex-row xl:items-cente">
          <div className="mt-10 xl:mt-0 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none bg-red-30">
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
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-">
            <div>
              <h1 className="text-3xl first-letter:uppercase first-letter:text-5xl font-semibold leading-8 text-whie sm:text-3xl sm:leading-9">
                {nounou.username}
              </h1>
              <p className="text-sm text-gray-600 first-letter:uppercase ">
                {nounou.localite}
              </p>
              <figure className="relative isolate pt-6 sm:pt-">
                <figcaption className="mt- text-base ">
                  <div className=" flex flex-col gap-3 text-whit sm:w-80">
                    <div className="flex gap-5 justify-between items-center">
                      {/* <a href={`mailto:${nounou.email}`}>
                      <RiMailSendFill />
                    </a> */}
                      <p className="">{nounou.email} </p>
                      <a
                        href={`mailto:${nounou.email}`}
                        className="flex items-center justify-center gap-x-2 rounded-bl-lg   text-sm font-semibold text-whit"
                      >
                        <EnvelopeIcon
                          className="h-5 w-5 text-whit"
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
                        className="flex items-center justify-center gap-x-2 rounded-br-lg  text-sm font-semibold text-whit"
                      >
                        <PhoneIcon
                          className="h-5 w-5 text-whit"
                          aria-hidden="true"
                        />
                        Call
                      </a>
                    </div>
                    {session ? <Message nounouId={idContact} /> : null}
                  </div>
                  {/* <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Workcation</div> */}
                </figcaption>
              </figure>
            </div>
            <div className="py-10 bg-red-30 flex flex-col gap-5">
              <Agenda />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div>
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
         
        }
      </div> */}
    </Dashboard>
  );
};

export default Nounou;
