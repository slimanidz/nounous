import { useEffect, useState } from "react";
import { ImBin2 } from "react-icons/im";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Page from "../components/Page";
import api from "../services/api";

const GetNounous = () => {
  const [nounous, setNounous] = useState(null);
  const [count, setCount] = useState(null);

  const handleDelete = async (event) => {
    const nounouId = Number(event.currentTarget.getAttribute("data-id"));
    const {
      data: { result },
    } = await api.delete(`/api/nounous/${nounouId}`);
    if (result) {
      window.location.reload();
    }
  };

  useEffect(() => {
    (async () => {
      const {
        data: { result, count },
      } = await api.get("/api/nounous");
      setNounous(result);
      setCount(count);
    })();
  }, []);

  if (!nounous) {
    return <p>Loading </p>;
  }

  /* je ne sais lire */

  return (
    <Page>
      <Header />
      <div className="bg-slat-500">
        <div className="bg-slate-700 p-3 sticky top-0 flex justify-between  text-white text-2xl">
          <h1 className=" text-center  text-2xl ">LIST OF USERS</h1>
          <h1 className=" text-center  text-2xl ">TOTAL: {count}</h1>
        </div>
        <ul>
          <li className="flex justify-between border-t-2 border-white p-3 text-white sticky top-0 bg-slate-700">
            <p className="px-2 w-10 text-center bg-ble-600 ">id</p>
            <p className="px-2 w-48 text-center bg-ble-600 ">E-Mail</p>
            <p className="px-2 w-32 text-center bg-ble-600 ">Username</p>
            <p className="px-2 w-32 text-center bg-ble-600 ">Telephone</p>
            <p>Del</p>
          </li>
          {nounous.map((nounou) => (
            <li
              className="p-3 border-2 border-black flex justify-between odd:bg-slate-200"
              key={nounou.id}
            >
              <p className="px-2 w-10 bg-ble-600 overflow-x-auto">
                {nounou.id}
              </p>
              {/* <button onClick={handleClick} data-id={nounou.id}> */}
              <p className="px-2 w-48 bg-blue-300 rounded  overflow-x-auto">
                {nounou.email}
              </p>
              {/* </button> */}
              <p className="px-2 w-32 bg-ellow-600 overflow-x-auto">
                {nounou.username}
              </p>
              <p className="px-2 w-32 bgblue-300 overflow-x-auto">
                {nounou.telephone}
              </p>
              <button onClick={handleDelete} data-id={nounou.id}>
                <ImBin2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default GetNounous;
