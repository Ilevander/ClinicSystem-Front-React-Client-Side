import axios from 'axios';
import { useEffect, useState } from 'react';

function PatientCrud() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    (async () => await loadPatients())();
  }, []);

  async function loadPatients() {
    try {
      const response = await axios.get('https://localhost:7171/api/Patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  }

  async function savePatient(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Patients', {
        name,
        mobile,
        address,
        email,
        password,
        username,
        appointments: [],
        bookings: [],
      });
      alert('Patient Registration Successfully');
      clearForm();
      loadPatients();
    } catch (err) {
      alert(err);
    }
  }

  async function editPatient(patient) {
    setName(patient.name);
    setMobile(patient.mobile);
    setAddress(patient.address);
    setEmail(patient.email);
    setPassword(patient.password);
    setUsername(patient.username);
    setId(patient.id);
  }

  async function deletePatient(id) {
    await axios.delete(`https://localhost:7171/api/Patients?id=${id}`);
    alert('Patient deleted Successfully');
    clearForm();
    loadPatients();
  }

  async function updatePatient(event) {
    event.preventDefault();
    try {
      await axios.put(`https://localhost:7171/api/Patients`, {
        id,
        name,
        mobile,
        address,
        email,
        password,
        username,
        appointments: [],
        bookings: [],
      });
      alert('Patient Updated Successfully');
      clearForm();
      loadPatients();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setId('');
    setName('');
    setMobile('');
    setAddress('');
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div>
      <h1>Patient Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => setId(event.target.value)}
            />

            <label>Patient Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={savePatient}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={updatePatient}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Patient Id</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {patients.map((patient) => (
          <tbody key={patient.id}>
            <tr>
              <th scope="row">{patient.id} </th>
              <td>{patient.name}</td>
              <td>{patient.mobile}</td>
              <td>{patient.address}</td>
              <td>{patient.email}</td>
              <td>{patient.username}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editPatient(patient)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deletePatient(patient.id)}
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

export default PatientCrud;
