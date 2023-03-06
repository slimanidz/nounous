import Head from "next/head";
import Link from "next/link";
import { useAppContextNounou } from "../components/AppContextNounou";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Modal from "../components/Modal";
import NounousGet from "../components/NounousGet";
import Page from "../components/Page";
import Nounous from "./nounous";

export default function Home() {
  const {
    state: { sessionNounou },
    openModal,
    setOpenModal,
    setTimeOut,
  } = useAppContextNounou();

  const haldleferme = () => {
    setOpenModal(false);
    setTimeOut(false);
  };

  return (
    <Page>
      <Head>
        <title>Nounous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className=" flex flex-col  items-cente grow overflow-y-auto">
        <div className="bg-red-300 relative">
          <ImageSrc
            src="/images/bg-nounou.webp"
            width="1500"
            height="100"
            className="w-full md:h-[500px] "
            alt="bg-nounou"
          />

          <div className="w-full flex items-center justify-center bg-red-20 flex-co gap-  absolute top-[80%]">
            <Link
              href="https://www.service-public.fr/particuliers/vosdroits/F798#:~:text=Pour%20devenir%20assistante%20maternelle%20agr%C3%A9%C3%A9e,sur%20un%20site%20internet%20d%C3%A9di%C3%A9."
              className="bg-blue-70 hover:bg-blue-300 text-whit rounded-xl
                font-bold md:text-2xl p-2"
            >
              {" "}
              Etre nounou
            </Link>
            <Link
              href="/conditions"
              className="bg-blue-70 hover:bg-blue-300 text-whit rounded-xl font-bold md:text-2xl p-2"
            >
              Conditions
            </Link>
            <Link
              href="https://www.assistante-maternelle.biz/assistante-maternelle/lettre-type.html"
              className="bg-blue-70 hover:bg-blue-300 text-whit rounded-xl font-bold md:text-2xl p-2"
            >
              Documentations
            </Link>
          </div>
        </div>
        <div className="md:flex items-center gap-5 justify-center">
          <div className="md:w-64 md:h-64 m-3 bg-slate-300 border-4 border-slate-400 rounded-xl flex justify-center  gap-2 md:flex-col items-center">
            <ImageSrc
              src="/logo/logo-nounous1.png"
              width="200"
              height={32}
              className="w-32 h-20"
              alt="logo-nounous1"
            />
            <h1 className="font-bold text-xl">Securiser et efficace</h1>
            <p className="text-center">
              Tous les jours, des centaines de nouvelles annonces.
            </p>
          </div>
          <div className="md:w-64 md:h-64 m-3 bg-slate-300 border-4 border-slate-400 rounded-xl flex justify-center  gap-2 md:flex-col items-center">
            <ImageSrc
              src="/logo/nounous2.png"
              width="200"
              height={32}
              className="w-32 h-20"
              alt="nounous2"
            />
            <h1 className="font-bold text-xl">Confiance</h1>
            <p className="text-center">
              Profils complets, vérifications, avis : recrutez sereinement.
            </p>
          </div>
          <div className="md:w-64 md:h-64 m-3 bg-slate-300 border-4 border-slate-400 rounded-xl flex justify-center  gap-2 md:flex-col items-center">
            <ImageSrc
              src="/logo/nounou-free.png"
              width="200"
              height={32}
              className="w-32 h-20"
              alt="nounou-free"
            />
            <h1 className="font-bold text-xl">Gratuite</h1>
            <p className="text-center">
              Se contacter et se rencontrer gratuitement ? Ici c&rsquo; est
              possible
            </p>
          </div>
        </div>

        {!sessionNounou ? (
          <div>
            <NounousGet />
            {/* <Link href="/test">upload</Link> */}
          </div>
        ) : null}
        {sessionNounou ? (
          <div>
            <Nounous />
          </div>
        ) : null}
      </div>
      <Modal
        className="w-screen h-screen bg-slate-5 flex justify-center items-end z-50 px-5 py-20"
        open={openModal}
      >
        <div className=" bg-white  p-5  shadow-lg shadow-black ">
          <button
            className="w-full flex justify-end underline"
            onClick={haldleferme}
          >
            Contunuer sans accepter
          </button>
          <p>
            Nounous et ses fournisseurs utilisent des cookies et des
            technologies similaires pour améliorer votre expérience et évaluer
            vos interactions avec nos sites Web, produits et services. Nous les
            utilisons également pour vous fournir des informations plus
            pertinentes dans les recherches et dans les annonces publicitaires
            sur ce site et sur d&rsquo;autres sites. Si cela vous convient,
            cliquez sur « Accepter ». En cliquant sur « Contunuer sans accepter
            », seuls les cookies strictement nécessaires seront définis. Vous
            pouvez également consulter nos fournisseurs et personnaliser vos
            choix en cliquant sur « Paramètres des cookies ».
          </p>
          <div className="flex justify-between">
            <button className="p-1 border-4 border-double border-black rounded-xl hover:bg-slate-100 active:bg-slate-200">
              Paramètres des cookies
            </button>
            <button className="p-1 border-4 border-double border-black rounded-xl hover:bg-slate-100 active:bg-slate-200">
              Accepter
            </button>
          </div>
        </div>
      </Modal>
    </Page>
  );
}
