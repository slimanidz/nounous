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
  const nounouId = sessionNounou.id;

  const hadleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setValue((pre) => [...pre, value]);
    } else
      setValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  };

  const service11 = checkedValue[0];
  const service21 = checkedValue[1];
  const service31 = checkedValue[2];
  const service41 = checkedValue[3];
  const service51 = checkedValue[4];
  const service61 = checkedValue[5];
  const service71 = checkedValue[6];
  const service81 = checkedValue[7];

  const checkedValue1 = [
    service11,
    service21,
    service31,
    service41,
    service51,
    service61,
    service71,
    service81,
  ];

  const values = checkedValue1.map((value) => {
    if (value === undefined) {
      return "";
    }
    return value;
  });

  const service1 = values[0];
  const service2 = values[1];
  const service3 = values[2];
  const service4 = values[3];
  const service5 = values[4];
  const service6 = values[5];
  const service7 = values[6];
  const service8 = values[7];

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
    if (result) {
      window.location.reload();
    }
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
    <div className="p-10">
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
        className="mt-5 p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
        type="button"
        onClick={handleOpenModel}
      >
        Modifier
      </button>
      <Modal
        className="bg-slate-50 p-5    flex justify-center items-center "
        open={openModal}
      >
        <div className="">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Choisi tes nouveaux services :
              </h1>
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
              <div className="flex gap-3">
                {" "}
                <button className="bg-blue-300 p-2 rounded-xl" type="submit">
                  confirm
                </button>
                <button
                  className="bg-red-300 p-2 rounded-xl"
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
