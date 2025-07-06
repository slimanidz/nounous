import Link from "next/link";
import Header from "../components/Header";
import ImageSrc from "../components/ImageSrc";
import Dashboard from "../components/Dashboard";
import Image from "next/image";

const BookBebe = () => {
  const histoires = [
    {
      id: 1,
      name: "Les glaces délicieuses",
      href: "histoires/Les-glaces-delicieuses",
      imageSrc: "/histoire1/1.jpg",
    },
    {
      id: 2,
      name: "Groudou le porc-épic",
      href: "histoires/Groudou-le-porc-epic",
      imageSrc: "/histoire2/1.jpg",
    },
  ];
  return (
    <Dashboard>
      <div className="">
        <ImageSrc
          width="10000"
          height="1000"
          src="/images/book.webp"
          alt="image"
          className="h-[20%] md:h-80 rounded-xl w-full pt-5"
        />
        <section className=" mx-auto max-w-2xl px-4 pb-24 pt- sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {histoires.map((histoire) => (
              <Link
                href={`/${histoire.href}`}
                key={histoire.id}
                className="group border rounded-xl"
              >
                <div className=" aspect-h-1 aspect-w-1 h-48 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <ImageSrc
                    width="100"
                    height="100"
                    src={histoire.imageSrc}
                    alt="image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <h1 className="md:text-xl text-center font-semibold text-gray-700">
                    {histoire.name}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Dashboard>
  );
};

export default BookBebe;
