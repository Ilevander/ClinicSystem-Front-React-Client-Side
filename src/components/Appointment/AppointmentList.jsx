import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AppointmentList = () => {
  const { appointments, loadAppointments } = useContext(GlobalContext);

  useEffect(() => {
    loadAppointments();
  }, []); // Trigger the loadAppointments function only once on component mount

  return (
    <div>
      {appointments.length > 0 ? (
        <table className="table table-dark" align="center">
          <thead>
            <tr>
              <th scope="col">Appointment Id</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Description</th>
              <th scope="col">Doctor Id</th>
              <th scope="col">Patient Id</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <th scope="row">{appointment.id}</th>
                <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                <td>{appointment.description}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.patientId}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    // Pass the appointment object to the editAppointment function
                    onClick={() => editAppointment(appointment)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    // Pass the appointment id to the deleteAppointment function
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentList;
