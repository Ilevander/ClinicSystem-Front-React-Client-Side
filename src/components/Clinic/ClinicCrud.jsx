import axios from 'axios';
import { useEffect, useState } from 'react';

function ClinicCrud() {
  const [clinicId, setClinicId] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [location, setLocation] = useState('');
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    (async () => await loadClinics())();
  }, []);

  async function loadClinics() {
    try {
      const response = await axios.get('https://localhost:7171/api/Clinics');
      setClinics(response.data);
    } catch (error) {
      console.error('Error fetching clinics:', error);
    }
  }

  async function saveClinic(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Clinics', {
        clinicId,
        clinicName,
        location,
        doctors: [],
      });
      alert('Clinic Added Successfully');
      clearForm();
      loadClinics();
    } catch (err) {
      alert(err);
    }
  }

  async function editClinic(clinic) {
    setClinicId(clinic.clinicId);
    setClinicName(clinic.clinicName);
    setLocation(clinic.location);
  }

  async function deleteClinic(id) {
    await axios.delete(`https://localhost:7171/api/Clinics?id=${id}`);
    alert('Clinic Deleted Successfully');
    clearForm();
    loadClinics();
  }

  async function updateClinic(event) {
    event.preventDefault();
    try {
      await axios.put('https://localhost:7171/api/Clinics', {
        clinicId,
        clinicName,
        location,
        doctors: [],
      });
      alert('Clinic Updated Successfully');
      clearForm();
      loadClinics();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setClinicId('');
    setClinicName('');
    setLocation('');
  };

  return (
    <div>
      <h1>Clinic Details</h1>
      <div className="container mt-4">
        <form>
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
          <div className="form-group">
            <label>Clinic Name</label>
            <input
              type="text"
              className="form-control"
              id="clinicName"
              value={clinicName}
              onChange={(event) => setClinicName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4 mr-4" onClick={saveClinic}>
              Add Clinic
            </button>
            <button className="btn btn-warning mt-4" onClick={updateClinic}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Clinic Id</th>
            <th scope="col">Clinic Name</th>
            <th scope="col">Location</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {clinics.map((clinic) => (
          <tbody key={clinic.clinicId}>
            <tr>
              <th scope="row">{clinic.clinicId} </th>
              <td>{clinic.clinicName}</td>
              <td>{clinic.location}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning mr-4"
                  onClick={() => editClinic(clinic)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteClinic(clinic.clinicId)}
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

export default ClinicCrud;
