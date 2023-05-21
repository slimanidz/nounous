import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import formatLongDateTime from "./formateurs/FormatDate";

const initialValues = {
  heur: null,
};
const Agenda = () => {
  // const initialState = {
  //   data: new Date(),
  // };

  const [state, setState] = useState(new Date());
  const [heurs, setheurs] = useState("");
  const onChange = (date) => {
    console.log(date);
    setState(date);
    console.log(formatLongDateTime(state));
  };
  const handleSubmit = ({ heur }) => {
    console.log(formatLongDateTime(state));
    console.log(heur);
  };
  const handeleDisable = ({ activeStartDate, date, view }) =>
    date.getDay() === 0 || date.getDay() === 1;

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        tileDisabled={handeleDisable}
        onChange={onChange}
        selectRange={false} /* true pour selectionne plusieurs date */
      />
      <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form className="flex flex-col items-center">
            <p>Vous avez choisi le: {formatLongDateTime(state)}</p>
            <Field type="time" name="heur" />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              valider
            </button>
          </Form>
        </Formik>
        <p>{formatLongDateTime(state)}</p>
      </div>
    </div>
  );
};

export default Agenda;
