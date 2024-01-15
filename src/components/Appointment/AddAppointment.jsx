import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

const AddAppointment = () => {
  let history = useHistory();

  const { addAppointment, appointments } = useContext(GlobalContext);

  const [id, setId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [description, setDescription] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id,
      appointmentDate,
      description,
      doctorId,
      patientId,
    };
    addAppointment(newAppointment);
    history.push("/appointments"); // Redirect to the appointments page or your desired route
  };

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="appointmentDate"
          >
            Appointment Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter description"
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="doctorId"
          >
            Doctor Id
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            type="text"
            placeholder="Enter doctor Id"
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="patientId"
          >
            Patient Id
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            type="text"
            placeholder="Enter patient Id"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Schedule Appointment
          </button>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <Link to="/appointments">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;
