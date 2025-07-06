import { useCallback, useState } from "react";
import api from "../services/api";
import { Field, Form, Formik } from "formik";

// import "./App.css"

async function postImage({ image }) {
  const formData = new FormData();
  formData.append("image", image);

  const result = await api.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

const App = () => {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  console.log(file);
  console.log(images);

  const handleSubmit = async (event) => {
    console.log("abc");
    event.preventDefault();
    const result = await postImage({ image: file });
    setImages([result.image, ...images]);
    console.log(result);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  console.log(file);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>

        <button type="submit">Submit</button>
      </form>
      <div className="flex items-center justify-center">
        <div className=" bg-no-repeat bg-cover bg-center bg-[url('/images/bg-nounou.webp')] text-green-600 ">
          Binvenu dans voutre application NOUNOUS Pour acceder a toutes les
          fonctionalites de votre application vous pouvez vous connecter comme
          utilisateur si vous ete chercheur d&rsquo;une nounous comme vous
          pouvez vous connecter comme nounous si vous ete une nounou! Binvenu
          dans voutre application NOUNOUS Pour acceder a toutes les
          fonctionalites de votre application vous pouvez vous connecter comme
          utilisateur si vous ete chercheur d&rsquo;une nounous comme vous
          pouvez vous connecter comme nounous si vous ete une nounou! Binvenu
          dans voutre application NOUNOUS Pour acceder a toutes les
          fonctionalites de votre application vous pouvez vous connecter comme
          utilisateur si vous ete chercheur d&rsquo;une nounous comme vous
          pouvez vous connecter comme nounous si vous ete une nounou!
        </div>
      </div>
      <div>
        https://i.enfant.com/1400x787/smart/2019/09/24/24343-jeux-bebe.jpg
      </div>
      getnounous:
      {/* <ul className=" md:w-[80%] bg-red-30 px-2 ">
        {nounous.map((nounou) => (
          <li
            className=" group flex justify-between odd:bg-slate-200 rounded-xl "
            key={nounou.id}
          >
            <div className="w-full flex justify-between items-center relative border-b-4 border-black rounded-xl ">
              <div className=" w-[70%] flex items-center  bg-red-30">
                <button onClick={handleClickContact} data-id={nounou.id}>
                  {images.map((image) => (
                    <div key={image.id}>
                      {image.id === nounou.id && (
                        <ImageSrc
                          src={`${image.imageUrl}`}
                          alt="image nounou"
                          width={180}
                          height={180}
                          className="w-20 h-20 rounded-xl"
                        />
                      )}
                    </div>
                  ))}
                </button>

                <div className="flex flex-col ">
                  <span className="px-2 bg-blue-60">
                    nom: {nounou.username}
                  </span>
                  <span className="px-2   bg-red-60">
                    localite: {nounou.localite}
                  </span>
                  <span className="px-2  bg-blue-30">{nounou.situation}</span>
                </div>
              </div>

              <div className="absolute  right-0 flex flex-col items-center justify-center bg-slate-300 rounded-xl md:invisible  group-hover:visible ">
                <button
                  className="border-b-2 border-black hover:bg-slate-600 hover:text-white rounded-xl px-2"
                  onClick={handleClickContact}
                  data-id={nounou.id}
                >
                  contact
                </button>
                <button
                  className="border-b-2 border-black hover:bg-slate-600 hover:text-white rounded-xl px-2"
                  onClick={handleClickServices}
                  data-id={nounou.id}
                >
                  services
                </button>
                <Link
                  href="/comments"
                  className="border-b-2 border-black hover:bg-slate-600 hover:text-white rounded-xl px-2"
                  onClick={handleClickComment}
                  data-id={nounou.id}
                >
                  commantaire
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
      Formik de filter{" "}
      {/* <Formik onSubmit={handelFilter} initialValues={initialValue}>
            <Form className="w-ful md:flex gap-3 bg-red-200 p-2 rounded-xl my-5 ">
              <p className="md:text-xl md:font-bold">
                Trounver une nounou proche de vous!
              </p>
              <div className="flex flex-grow">
                <div className=" flex items-center border-2 border-black px-2 rounded-xl">
                  <Field
                    className="bg-red-200"
                    name="adresse"
                    placeholder="entrer votre ville"
                  />
                  {adresse ? (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className=" border-2 border-black rounded-full px-1 "
                    >
                      X
                    </button>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 active:bg-blue-300 text-white font-bold px-2 py-1 ml-1 rounded-xl"
                >
                  Ok
                </button>
              </div>
            </Form>
          </Formik> */}
    </div>
  );
};

export default App;
