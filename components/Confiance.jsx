import React from "react";
import ImageSrc from "./ImageSrc";
import Link from "next/link";

const Confiance = () => {
  return (
    <div className="w-full flex items-center justify-center bg-red-20 flex-co gap-  absolute top-[80%]">
      <div>
        <div>
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
      <div className="flex items-center  justify-around">
        <div className="md:w-64 md:h-64 m-2 bg-slate-300 border-4 border-slate-400 rounded-xl flex justify-center  gap-2 flex-col items-center">
          <ImageSrc
            src="/logo/nounous2.png"
            width="200"
            height={32}
            className="  md:w-32 md:h-20 "
            alt="nounous2"
          />
          <h1 className=" font-bold text-sm md:text-xl text-center">
            Confiance
          </h1>
          <p className="text-center  invisible w-[1px] h-[1px] md:visible md:w-64 md:h-20">
            Profils complets, vérifications, avis : recrutez sereinement.
          </p>
        </div>

        <div className="md:w-64  md:h-64 m-2 bg-slate-300 border-4 border-slate-400 rounded-xl flex flex-col justify-center  gap-2  items-center">
          <ImageSrc
            src="/logo/logo-nounous1.png"
            width="200"
            height={32}
            className=" md:w-32 md:h-20 "
            alt="logo-nounous1"
          />
          <h1 className=" font-bold text-sm md:text-xl text-center">
            Securiser et efficace
          </h1>
          <p className="text-center  invisible w-[1px] h-[1px] md:visible md:w-64 md:h-20">
            Tous les jours, des centaines de nouvelles annonces.
          </p>
        </div>

        <div className="md:w-64 md:h-64 m-2 bg-slate-300 border-4 border-slate-400 rounded-xl flex justify-center  gap-2 flex-col items-center">
          <ImageSrc
            src="/logo/nounou-free.png"
            width="200"
            height={32}
            className=" md:w-32 md:h-20 "
            alt="nounou-free"
          />
          <h1 className=" font-bold text-sm md:text-xl text-center">
            Gratuite
          </h1>
          <p className="text-center invisible w-[1px] h-[1px] md:visible md:w-64 md:h-20  ">
            Se contacter et se rencontrer gratuitement ? Ici c&rsquo; est
            possible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confiance;
