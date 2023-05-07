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
    <Page>
      <Header />
      <div>
        {
          session || sessionNounou ? (
            <div>
              <div className="flex flex-col items-center gap-5 mt-20 ">
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

                <div className=" ">
                  <h1>
                    Name :<span className="font-bold ">{nounou.username}</span>
                  </h1>
                  <p>Localite: {nounou.localite}</p>
                  <div className="flex gap-3">
                    <p>E-mail: {nounou.email} </p>
                    <a href={`mailto:${nounou.email}`}>
                      <RiMailSendFill />
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <p> Telephone: {nounou.telephone}</p>
                    <a href={`tel:${nounou.telephone}`}>
                      <FaPhone />
                    </a>
                  </div>
                  {session ? (
                    <div>
                      Message:
                      <Message nounouId={idContact} />
                    </div>
                  ) : null}
                </div>
                <div>
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
    </Page>
  );
};

export default Nounou;
