import React, { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import { BiRightArrowAlt } from "react-icons/bi";
import { useAppContextNounou } from "./AppContextNounou";
import Modal from "./Modal";
import { Form, Formik } from "formik";

// import api from "../../services/api";

const initialValues = {
  name1: false,
  name2: false,
  name3: false,
  name4: false,
  name5: false,
  name6: false,
  name7: false,
  name8: false,
};

const ServiceGet = () => {
  const [services, setServices] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [checkedValue, setValue] = useState([]);
  const {
    state: { sessionNounou },
  } = useAppContextNounou();
  console.log(sessionNounou);
  const nounouId = sessionNounou.id;

  const hadleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setValue((pre) => [...pre, value]);
    }

    console.log({ res: checkedValue });

    // if (checked) {
    //   setValue((pre) => [...pre, value]);
    // } else
    //   setValue((pre) => {
    //     return [...pre.filter((skill) => skill !== value)];
    //   });
  };

  const service1 = checkedValue[0];
  const service2 = checkedValue[1];
  const service3 = checkedValue[2];
  const service4 = checkedValue[3];
  const service5 = checkedValue[4];
  const service6 = checkedValue[5];
  const service7 = checkedValue[6];
  const service8 = checkedValue[7];

  const checkedValue1 = [
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
  ];

  checkedValue1.map((value) => {
    if (value === undefined) {
      return " ";
    }
    return value;
  });

  console.log({ res1: checkedValue1 });
  const handleSubmit = useCallback(async () => {
    const {
      data: { result },
    } = await api.patch("/api/services", {
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service7,
      service8,
      nounouId,
    });
  }, [
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
    nounouId,
  ]);
  const hiddenFields = [];
  useEffect(() => {
    (async () => {
      const {
        data: { result1 },
      } = await api.get(`/api/services/${nounouId}`);

      const servicefiltre = result1.map((row) =>
        Object.fromEntries(
          Object.entries(row).filter(([field]) => !hiddenFields.includes(field))
        )
      );
      setServices(servicefiltre);
    })();
  }, [nounouId]);
  if (!services) {
    return <p>Loading </p>;
  }
  const handleOpenModel = () => {
    setOpenModal(true);
  };
  const handleCloseModel = () => {
    setOpenModal(false);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold">services:</h1>
      <ul className=" bg-red-30">
        {services.length === 0 ? (
          <p>no services difined ...</p>
        ) : (
          <ul className="  ">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col gap-3 odd:bg-red-30 "
              >
                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service1 ? <BiRightArrowAlt /> : null}{" "}
                  {service.service1}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service2 ? <BiRightArrowAlt /> : null}
                  {service.service2}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service3 ? <BiRightArrowAlt /> : null}
                  {service.service3}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service4 ? <BiRightArrowAlt /> : null}
                  {service.service4}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service5 ? <BiRightArrowAlt /> : null}
                  {service.service5}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service6 ? <BiRightArrowAlt /> : null}
                  {service.service6}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {" "}
                  {service.service7 ? <BiRightArrowAlt /> : null}
                  {service.service7}
                </h1>

                <h1 className="px-2 flex gap-2   bg-red-">
                  {service.service8 ? <BiRightArrowAlt /> : null}
                  {service.service8}
                </h1>
              </li>
            ))}
          </ul>
        )}
      </ul>
      <button
        className="bg-blue-700 active:bg-blue-400 text-white p-2 rounded-xl mt-5"
        type="button"
        onClick={handleOpenModel}
      >
        Modifier
      </button>
      <Modal
        className="bg-slate-50 p-5    flex justify-center items-center "
        open={openModal}
      >
        Hello
        <div className="">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-3">
              <div>
                <input
                  type="checkbox"
                  value="garde enfant jour"
                  onChange={hadleChange}
                />
                <span className="px-2">garde enfant jour</span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="garde enfant nuit"
                  onChange={hadleChange}
                />
                <span className="px-2">garde enfant nuit</span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="garde enfant jour et nuit"
                  onChange={hadleChange}
                />
                <span className="px-2">garde enfant jour et nuit</span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="recuperer l'enfant de l'ecole"
                  onChange={hadleChange}
                />
                <span className="px-2">
                  recuperer l&rsquo;enfant de l&rsquo;ecole
                </span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="soutien scolaire"
                  onChange={hadleChange}
                />
                <span className="px-2">soutien scolaire</span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="garde enfant moin de 2 ans"
                  onChange={hadleChange}
                />
                <span className="px-2">garde enfant moin de 2 ans</span>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value="prepare a manger"
                  onChange={hadleChange}
                />
                <span className="px-2">prepare a manger</span>
              </div>
              <div>
                {" "}
                <input type="checkbox" value="autre" onChange={hadleChange} />
                <span className="px-2">autre</span>
              </div>
              <div>
                {" "}
                <button type="submit">add</button>
                <button
                  className="bg-red-300 p-1 rounded-xl"
                  type="button"
                  onClick={handleCloseModel}
                >
                  annul
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ServiceGet;
