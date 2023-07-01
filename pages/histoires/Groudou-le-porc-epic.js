import React from "react";
import Dashboard from "../../components/Dashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import "swiper/css/scrollbar";

const Histoire2 = () => {
  const imageUrl = [
    { url: "/histoire2/1.jpg", text: " Groudou le porc-épic" },
    {
      url: "/histoire2/2.jpg",
      text: ` Bonjour, je m'appelle Groudou,
               je suis un petit porc-épic qui aime bien danser, chanter et
              m'amuser...`,
    },
    {
      url: "/histoire2/3.jpg",
      text: "... mais ce que j'aime pas trop,  ce sont ces longs poils durs que j'ai sur tout mon dos et qu'on appelle des piquants.",
    },
    {
      url: "/histoire2/4.jpg",
      text: "  Les autres non plus ne les aiment pas, d'ailleurs. Sur l'aire de jeux, personne ne veut jouer avec moi !",
    },
    {
      url: "/histoire2/5.jpg",
      text: " Au camping de la clairière, personne ne veut partager sa tente avec moi. Tu ne peux pas dormir à côté de nous, disent les autres animaux, tu nous ferais mal avec tes piquants !",
    },
    {
      url: "/histoire2/6.jpg",
      text: " Un jour que j'étais tout seul, une petite souris s'est approchée de moi et m'a dit : Groudou, avec tes piquants, tu es une personne vraiment spéciale...",
    },
    {
      url: "/histoire2/7.jpg",
      text: " La petite souris voulait m'aider et comme elle savait coudre, elle m'a fait une jolie chemise.",
    },
    {
      url: "/histoire2/8.jpg",
      text: " Tout fier, je suis allé montrer ma chemise aux autres animaux. Mais ils ont crié: Ne t'approche pas de nous ! Tu as des piquants pointus dans le dos !",
      text2: "  Des piquants ? Mais  non, je n'en ai pas...",
    },
    {
      url: "/histoire2/9.jpg",
      text: "  Les autres animaux se sont moqué de moi et je suis retourné voir la souris, ma seule amie. Ah mais tes piquants ont transpercé la chemise ! ",
    },
    {
      url: "/histoire2/10.jpg",
      text: " J'avais envie de pleurer, je ne savais plus quoi faire. Mais la souris avait une idée. — Ne t'en fais pas, mon très piquant ami, j'ai la solution...",
    },
    {
      url: "/histoire2/11.jpg",
      text: " Munie de peinture orange et rouge, elle s'est mise à me peindre les piquants, mon dos semblait être en flammes !",
    },
    {
      url: "/histoire2/12.jpg",
      text: " et voilà, n'aie plus peur, tu peux aller retrouver les autres, ils seront étonnés.",
    },
    {
      url: "/histoire2/13.jpg",
      text: "  En effet, dès qu'ils m'ont vu avec mes piquants couleur de feu, ils m'ont admiré et auraient bien voulu que la souris les peigne eux aussi !",
    },
    {
      url: "/histoire2/14.jpg",
      text: " Depuis ce jour-là, tout le monde joue avec moi, je ne suis plus seul grâce à mon amie la souris.",
    },
    {
      url: "/histoire2/15.jpg",
      text: " et maintenant je suis très content d'avoir des piquants !",
    },
  ];

  return (
    <Dashboard>
      <h1 className="pt-5 text-3xl text-center font-bold">
        Groudou le porc-épic
      </h1>
      <div className="w-full h-full flex justify-center  items-center">
        <div className="md:w-[60%] w-[100%] rounded-xl bg-indigo-300 shadow-lg shadow-indigo-500/100 m-10">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {imageUrl.map((item) => (
              <SwiperSlide key={item.url} className=" ">
                <div className="flex flex-col items-center gap-5 p-5 ">
                  <Image
                    width="400"
                    height="80"
                    className="w-full h-[300px] sm:h-[500px] rounded-xl "
                    src={item.url}
                    alt="slide_image"
                  />
                  <p className="text-2xl sm:text-4xl text-center w-[75%]">
                    {item.text}
                  </p>
                  <p className="text-2xl sm:text-4xl text-center w-[75%]">
                    {item.text2}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Dashboard>
  );
};

export default Histoire2;
