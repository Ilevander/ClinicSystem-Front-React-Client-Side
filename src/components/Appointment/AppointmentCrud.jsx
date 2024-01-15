import axios from 'axios';
import { useEffect, useState } from 'react';

function AppointmentCrud() {
  const [id, setId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [description, setDescription] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    (async () => await loadAppointments())();
  }, []);

  async function loadAppointments() {
    try {
      const response = await axios.get('https://localhost:7171/api/Appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  async function saveAppointment(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Appointments', {
        id,
        appointmentDate,
        description,
        doctorId,
        patientId,
        doctor: null,
        patient: null,
      });
      alert('Appointment Scheduled Successfully');
      clearForm();
      loadAppointments();
    } catch (err) {
      alert(err);
    }
  }

  async function editAppointment(appointment) {
    setId(appointment.id);
    setAppointmentDate(appointment.appointmentDate);
    setDescription(appointment.description);
    setDoctorId(appointment.doctorId);
    setPatientId(appointment.patientId);
  }

  async function deleteAppointment(id) {
    await axios.delete(`https://localhost:7171/api/Appointments?id=${id}`);
    alert('Appointment Deleted Successfully');
    clearForm();
    loadAppointments();
  }

  async function updateAppointment(event) {
    event.preventDefault();
    try {
      await axios.put(`https://localhost:7171/api/Appointments`, {
        id,
        appointmentDate,
        description,
        doctorId,
        patientId,
        doctor: null,
        patient: null,
      });
      alert('Appointment Updated Successfully');
      clearForm();
      loadAppointments();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setId('');
    setAppointmentDate('');
    setDescription('');
    setDoctorId('');
    setPatientId('');
  };

  return (
    <div>
      <h1>Appointment Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Appointment Id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="datetime-local"
              className="form-control"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Doctor Id</label>
            <input
              type="text"
              className="form-control"
              id="doctorId"
              value={doctorId}
              onChange={(event) => setDoctorId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Patient Id</label>
            <input
              type="text"
              className="form-control"
              id="patientId"
              value={patientId}
              onChange={(event) => setPatientId(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={saveAppointment}>
              Schedule Appointment
            </button>
            <button className="btn btn-warning mt-4" onClick={updateAppointment}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

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
        {appointments.map((appointment) => (
          <tbody key={appointment.id}>
            <tr>
              <th scope="row">{appointment.id} </th>
              <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
              <td>{appointment.description}</td>
              <td>{appointment.doctorId}</td>
              <td>{appointment.patientId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editAppointment(appointment)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default AppointmentCrud;
