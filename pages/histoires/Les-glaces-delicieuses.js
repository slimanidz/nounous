import React, { useState } from "react";
import Header from "../../components/Header";
import ImageSrc from "../../components/ImageSrc";
import Dashboard from "../../components/Dashboard";
import { BiCaretLeftCircle } from "react-icons/bi";
import { BiCaretRightCircle } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import "swiper/css/scrollbar";

const Histoire1 = () => {
  const imageUrl = [
    { url: "/histoire1/1.jpg", text: " Les glaces délicieuses" },
    {
      url: "/histoire1/2.jpg",
      text: `Ding ding ding ding « Shubham, Ira, Tonton Sorbet est là !»`,
    },
    {
      url: "/histoire1/3.jpg",
      text: "Tous les enfants se précipitent vers Tonton Sorbet !",
    },
    {
      url: "/histoire1/4.jpg",
      text: " Nous nous regardons à travers les bouteilles. Nos visages ont l'air si drôles !",
    },
    {
      url: "/histoire1/5.jpg",
      text: "Miammm... Des glaces magiques et colorées !",
    },
    {
      url: "/histoire1/6.jpg",
      text: "              Saee tapote la glace de Abhi.",
    },
    {
      url: "/histoire1/7.jpg",
      text: "              Une glace tombe, mais Bhoori est très content.",
    },
    {
      url: "/histoire1/8.jpg",
      text: "              J'aime les glaces. J'en vois partout.",
    },
    {
      url: "/histoire1/9.jpg",
      text: "              Shubham veut être un Tonton Sorbet quand il sera grand.",
    },
    {
      url: "/histoire1/10.jpg",
      text: "              Il me fera une ÉNORME glace.",
    },
    {
      url: "/histoire1/11.jpg",
      text: "              Shubham pourra en manger un morceau, tout comme Bhoori.",
    },
    {
      url: "/histoire1/12.jpg",
      text: "              J'avalerai le reste !",
    },
    { url: "/histoire1/13.jpg", text: "miam miam mmiammmmm" },
  ];
  // let num = 1;
  const [num, setNum] = useState(1);
  const handleNext = () => {
    if (num === 13) {
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
      <h1 className="pt-10 text-3xl text-center font-bold">
        Les glaces délicieuses
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="w-full flex gap-3 justify-center items-center mt-10 md:mt-20 p-3">
        <button
          className={
            num === 1
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] left-10"
              : "absolute top-[50%] left-10"
          }
          onClick={handleBack}
        >
          {" "}
          <BiCaretLeftCircle className="w-10 h-10  md:w-20 md:h-20 " />
        </button>
        <div className="flex flex-col items-center gap-3">
          <ImageSrc
            width="400"
            height="80"
            className="w-[80%] h-[300px] md:h-[500px]"
            alt="histoire"
            src={`/histoire1/${num}.jpg`}
          />
          {num === 1 ? (
            <h1 className="text-3xl text-center font-bold">
              Les glaces délicieuses
            </h1>
          ) : null}
          {num === 2 ? (
            <h1 className="text-3xl text-center">
              Ding ding ding ding « Shubham, Ira, Tonton Sorbet est là ! »
            </h1>
          ) : null}
          {num === 3 ? (
            <h1 className="text-3xl text-center">
              Tous les enfants se précipitent vers Tonton Sorbet !
            </h1>
          ) : null}
          {num === 4 ? (
            <h1 className="text-3xl text-center">
              Nous nous regardons à travers les bouteilles.
              <br /> Nos visages ont l&rsquo;air si drôles !
            </h1>
          ) : null}
          {num === 5 ? (
            <h1 className="text-3xl text-center">
              Miammm... Des glaces magiques et colorées !
            </h1>
          ) : null}
          {num === 6 ? (
            <h1 className="text-3xl text-center">
              Saee tapote la glace de Abhi.
            </h1>
          ) : null}
          {num === 7 ? (
            <h1 className="text-3xl text-center">
              Une glace tombe, mais Bhoori est très content.
            </h1>
          ) : null}
          {num === 8 ? (
            <h1 className="text-3xl text-center">
              J&rsquo;aime les glaces. J&rsquo;en vois partout.
            </h1>
          ) : null}
          {num === 9 ? (
            <h1 className="text-3xl text-center">
              Shubham veut être un Tonton Sorbet quand il sera grand.
            </h1>
          ) : null}
          {num === 10 ? (
            <h1 className="text-3xl text-center">
              Il me fera une ÉNORME glace.
            </h1>
          ) : null}
          {num === 11 ? (
            <h1 className="text-3xl text-center">
              Shubham pourra en manger un morceau, tout comme Bhoori.
            </h1>
          ) : null}
          {num === 12 ? (
            <h1 className="text-3xl text-center">
              J&rsquo;avalerai le reste !
            </h1>
          ) : null}
        </div>

        <button
          className={
            num === 13
              ? "disabled text-slate-100 cursor-auto absolute top-[50%] right-10"
              : "absolute top-[50%] right-10"
          }
          onClick={handleNext}
        >
          <BiCaretRightCircle className="w-10 h-10 md:w-20 md:h-20 " />
        </button>
      </div> */}
    </Dashboard>
  );
};

export default Histoire1;
