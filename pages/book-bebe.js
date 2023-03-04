import Link from "next/link";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Page from "../components/Page";

const BookBebe = () => {
  return (
    <Page>
      <Header />

      <div className="">
        <ImageSrc
          width="10000"
          height="1000"
          src="/images/book.webp"
          alt="image"
          className="h-[20%] md:h-80"
        />
        <h1 className="text-3xl ">Histoires pour enfants:</h1>
        <Link
          href="/histoires/Les-glaces-delicieuses"
          className="p-4 m-2 md:mx-20 flex items-center bg-slate-100"
        >
          <ImageSrc
            width="100"
            height="100"
            src="/histoire1/1.jpg"
            alt="image"
            className="rounded-xl  hover:scale-150  duration-200"
          />
          <div className="p-3">Les-glaces-délicieuses </div>
        </Link>
        <Link
          href="/histoires/Groudou-le-porc-epic"
          className="p-4 m-2 md:mx-20 flex items-center bg-slate-100"
        >
          <ImageSrc
            width="100"
            height="100"
            src="/histoire2/1.jpg"
            alt="image"
            className="rounded-xl  hover:scale-150  duration-200"
          />
          <div className="p-3">Groudou le porc-epic </div>
        </Link>
      </div>
    </Page>
  );
};

export default BookBebe;
