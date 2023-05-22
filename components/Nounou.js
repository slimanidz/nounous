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
