import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import formatLongDateTime from "./formateurs/FormatDate";

const initialValues = {
  heur: null,
};
const Agenda = () => {
  const [state, setState] = useState(new Date());
  const [heurs, setheurs] = useState("");
  const onChange = (date) => {
    setState(date);
  };
  const handleSubmit = ({ heur }) => {
    setheurs(heur);
  };
  const handeleDisable = ({ activeStartDate, date, view }) =>
    date.getDay() === 0 || date.getDay() === 1;

  return (
    <div className="flex flex-col items-cente gap-3">
      <div>
        <h1 className="font-semibold text-xl">Réservation:</h1>
        <span>Vous pouvez faire votre réservation dès maintenant</span>{" "}
      </div>
      <Calendar
        tileDisabled={handeleDisable}
        onChange={onChange}
        selectRange={false} /* true pour selectionne plusieurs date */
      />
      <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form className="flex flex-col gap-5 items-center w-80">
            <Field type="time" name="heur" />
            <button
              type="submit"
              className="flex w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              valider
            </button>
            Vous avez choisi le: {formatLongDateTime(state)} a {heurs}
          </Form>
        </Formik>
        <p></p>
      </div>
    </div>
  );
};

export default Agenda;
