import axios from 'axios';
import { useEffect, useState } from 'react';

function ScheduleCrud() {
  const [scheduleId, setScheduleId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    (async () => await loadSchedules())();
  }, []);

  async function loadSchedules() {
    try {
      const response = await axios.get('https://localhost:7171/api/Schedules');
      setSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  }

  async function saveSchedule(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Schedules', {
        startTime,
        endTime,
        doctorId: parseInt(doctorId),
      });
      alert('Schedule Added Successfully');
      clearForm();
      loadSchedules();
    } catch (err) {
      alert(err);
    }
  }

  async function editSchedule(schedule) {
    setScheduleId(schedule.id);
    setStartTime(schedule.startTime);
    setEndTime(schedule.endTime);
    setDoctorId(schedule.doctorId);
  }

  async function deleteSchedule(id) {
    await axios.delete(`https://localhost:7171/api/Schedules?id=${id}`);
    alert('Schedule Deleted Successfully');
    clearForm();
    loadSchedules();
  }

  async function updateSchedule(event) {
    event.preventDefault();
    try {
      await axios.put('https://localhost:7171/api/Schedules', {
        id: parseInt(scheduleId),
        startTime,
        endTime,
        doctorId: parseInt(doctorId),
      });
      alert('Schedule Updated Successfully');
      clearForm();
      loadSchedules();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setScheduleId('');
    setStartTime('');
    setEndTime('');
    setDoctorId('');
  };

  return (
    <div>
      <h1>Schedules Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Schedule Id</label>
            <input
              type="text"
              className="form-control"
              id="scheduleId"
              value={scheduleId}
              onChange={(event) => setScheduleId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="startTime"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>End Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="endTime"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
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
          <div>
            <button className="btn btn-primary mt-4 mr-4" onClick={saveSchedule}>
              Add Schedule
            </button>
            <button className="btn btn-warning mt-4" onClick={updateSchedule}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Schedule Id</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Doctor Id</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {schedules.map((schedule) => (
          <tbody key={schedule.id}>
            <tr>
              <th scope="row">{schedule.id} </th>
              <td>{schedule.startTime}</td>
              <td>{schedule.endTime}</td>
              <td>{schedule.doctorId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning mr-4"
                  onClick={() => editSchedule(schedule)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteSchedule(schedule.id)}
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

export default ScheduleCrud;
