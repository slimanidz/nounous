import React, { useState } from "react";
import Header from "../../components/Header";
import ImageSrc from "../../components/ImageSrc";
import Dashboard from "../../components/Dashboard";
import { BiCaretLeftCircle } from "react-icons/bi";
import { BiCaretRightCircle } from "react-icons/bi";
import Footer from "../../components/Footer";

const Histoire1 = () => {
  // let num = 1;
  const [num, setNum] = useState(1);
  const handleNext = () => {
    if (num === 15) {
      return;
    }
    setNum(num + 1);
  };
  const handleBack = () => {
    if (num === 1) {
      return;
    }
    setNum(num - 1);
  };

  return (
    <Dashboard>
      <h1 className="pt-5 text-3xl text-center font-bold">
        Groudou le porc-épic
      </h1>
      <div className="w-full h-screen flex flex-col justify-between  gap-3  mt-10 md:mt-20    ">
        <button
          className={
            num === 1
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] left-10"
              : "absolute top-[50%] left-10"
          }
          onClick={handleBack}
        >
          {" "}
          <BiCaretLeftCircle className="w-10 h-10 md:w-20 md:h-20 " />
        </button>
        <div className="flex flex-col justify-center items-center gap-3 ">
          <ImageSrc
            width="400"
            height="80"
            className="w-[80%] h-[300px] md:h-[500px] "
            alt="histoire"
            src={`/histoire2/${num}.jpg`}
          />
          {num === 1 ? (
            <h1 className="text-3xl text-center font-bold">
              Groudou le porc-épic
            </h1>
          ) : null}
          {num === 2 ? (
            <h1 className="text-3xl text-center">
              Bonjour, je m&rsquo;appelle Groudou,
              <br /> je suis un petit porc-épic qui aime bien danser, chanter et
              m&rsquo;amuser...
            </h1>
          ) : null}
          {num === 3 ? (
            <h1 className="text-3xl text-center">
              ... mais ce que j&rsquo;aime pas trop, <br /> ce sont ces longs
              poils durs que j&rsquo;ai sur tout mon dos et qu&rsquo;on appelle
              des piquants.
            </h1>
          ) : null}
          {num === 4 ? (
            <h1 className="text-3xl text-center">
              Les autres non plus ne les aiment pas, d&rsquo;ailleurs. Sur
              l&rsquo;aire de
              <br />
              jeux, personne ne veut jouer avec moi !
              {/* <br /> Nos visages ont l&rsquo;air si drôles ! */}
            </h1>
          ) : null}
          {num === 5 ? (
            <h1 className="text-3xl text-center">
              Au camping de la clairière, personne ne veut partager sa tente
              avec moi.
              <br /> — Tu ne peux pas dormir à côté de nous, disent les autres
              animaux, <br />
              tu nous ferais mal avec tes piquants !
            </h1>
          ) : null}
          {num === 6 ? (
            <h1 className="text-3xl text-center">
              Un jour que j&rsquo;étais tout seul, une petite souris s&rsquo;est
              approchée de moi et m&rsquo;a dit :<br /> — Groudou, avec tes
              piquants, <br />
              tu es une personne vraiment spéciale...
            </h1>
          ) : null}
          {num === 7 ? (
            <h1 className="text-3xl text-center">
              La petite souris voulait m&rsquo;aider et comme elle savait
              coudre,
              <br /> elle m&rsquo;a fait une jolie chemise.
            </h1>
          ) : null}
          {num === 8 ? (
            <h1 className="text-3xl text-center">
              Tout fier, je suis allé montrer ma chemise aux autres animaux.
              Mais ils ont crié :<br /> — Ne t&rsquo;approche pas de nous ! Tu
              as des piquants pointus dans le dos !<br /> — Des piquants ? Mais
              non, je n&rsquo;en ai pas...
            </h1>
          ) : null}
          {num === 9 ? (
            <h1 className="text-3xl text-center">
              Les autres animaux se sont moqué de moi et je suis retourné voir
              <br />
              la souris, ma seule amie.
              <br /> — Ah mais tes piquants ont transpercé la chemise !{" "}
            </h1>
          ) : null}
          {num === 10 ? (
            <h1 className="text-3xl text-center">
              J&rsquo;avais envie de pleurer, je ne savais plus quoi faire. Mais
              la souris avait une idée.
              <br /> — Ne t&rsquo;en fais pas, mon très piquant ami,
              <br /> j&rsquo;ai la solution...{" "}
            </h1>
          ) : null}
          {num === 11 ? (
            <h1 className="text-3xl text-center">
              Munie de peinture orange et rouge, elle s&rsquo;est mise à me
              peindre les piquants,
              <br /> mon dos semblait être en flammes !{" "}
            </h1>
          ) : null}
          {num === 12 ? (
            <h1 className="text-3xl text-center">
              — et voilà, n&rsquo;aie plus peur, tu peux aller retrouver les
              autres,
              <br /> ils seront étonnés.
            </h1>
          ) : null}
          {num === 13 ? (
            <h1 className="text-3xl text-center">
              En effet, dès qu&rsquo;ils m&rsquo;ont vu avec mes piquants
              couleur de feu,
              <br />
              ils m&rsquo;ont admiré et auraient bien voulu que la souris les
              peigne eux aussi !
            </h1>
          ) : null}
          {num === 14 ? (
            <h1 className="text-3xl text-center">
              Depuis ce jour-là, tout le monde joue avec moi, <br />
              je ne suis plus seul grâce à mon amie la souris.
            </h1>
          ) : null}
          {num === 15 ? (
            <h1 className="text-3xl text-center">
              et maintenant je suis très content d&rsquo;avoir des piquants !{" "}
            </h1>
          ) : null}
        </div>
        <button
          className={
            num === 15
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] right-10"
              : "absolute top-[50%] right-10"
          }
          onClick={handleNext}
        >
          <BiCaretRightCircle className="w-10 h-10 md:w-20 md:h-20" />
        </button>
      </div>
    </Dashboard>
  );
};

export default Histoire1;
