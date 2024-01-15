import axios from 'axios';
import { useEffect, useState } from 'react';

function DoctorCrud() {
  const [doctorId, setDoctorId] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [clinicId, setClinicId] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    (async () => await loadDoctors())();
  }, []);

  async function loadDoctors() {
    try {
      const response = await axios.get('https://localhost:7171/api/Doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  async function saveDoctor(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Doctors', {
        doctorId,
        doctorName,
        specialization,
        clinicId,
        clinic: null,
        appointments: [],
        fees: [],
        schedules: [],
      });
      alert('Doctor Added Successfully');
      clearForm();
      loadDoctors();
    } catch (err) {
      alert(err);
    }
  }

  async function editDoctor(doctor) {
    setDoctorId(doctor.doctorId);
    setDoctorName(doctor.doctorName);
    setSpecialization(doctor.specialization);
    setClinicId(doctor.clinicId);
  }

  async function deleteDoctor(id) {
    await axios.delete(`https://localhost:7171/api/Doctors?id=${id}`);
    alert('Doctor Deleted Successfully');
    clearForm();
    loadDoctors();
  }

  async function updateDoctor(event) {
    event.preventDefault();
    try {
      await axios.put('https://localhost:7171/api/Doctors', {
        doctorId,
        doctorName,
        specialization,
        clinicId,
        clinic: null,
        appointments: [],
        fees: [],
        schedules: [],
      });
      alert('Doctor Updated Successfully');
      clearForm();
      loadDoctors();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setDoctorId('');
    setDoctorName('');
    setSpecialization('');
    setClinicId('');
  };

  return (
    <div>
      <h1>Doctor Details</h1>
      <div className="container mt-4">
        <form>
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
            <label>Doctor Name</label>
            <input
              type="text"
              className="form-control"
              id="doctorName"
              value={doctorName}
              onChange={(event) => setDoctorName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              value={specialization}
              onChange={(event) => setSpecialization(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Clinic Id</label>
            <input
              type="text"
              className="form-control"
              id="clinicId"
              value={clinicId}
              onChange={(event) => setClinicId(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4 mr-4" onClick={saveDoctor}>
              Add Doctor
            </button>
            <button className="btn btn-warning mt-4" onClick={updateDoctor}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Doctor Id</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">Clinic Id</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {doctors.map((doctor) => (
          <tbody key={doctor.doctorId}>
            <tr>
              <th scope="row">{doctor.doctorId} </th>
              <td>{doctor.doctorName}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.clinicId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning mr-4"
                  onClick={() => editDoctor(doctor)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteDoctor(doctor.doctorId)}
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

export default DoctorCrud;
