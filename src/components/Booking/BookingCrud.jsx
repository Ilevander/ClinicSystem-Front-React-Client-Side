import axios from 'axios';
import { useEffect, useState } from 'react';

function BookingCrud() {
  const [id, setId] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [patientId, setPatientId] = useState('');
  const [clinicId, setClinicId] = useState('');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => await loadBookings())();
  }, []);

  async function loadBookings() {
    try {
      const response = await axios.get('https://localhost:7171/api/Bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }

  async function saveBooking(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Bookings', {
        id,
        bookingDate,
        patientId,
        clinicId,
        patient: null,
      });
      alert('Booking Added Successfully');
      clearForm();
      loadBookings();
    } catch (err) {
      alert(err);
    }
  }

  async function editBooking(booking) {
    setId(booking.id);
    setBookingDate(booking.bookingDate);
    setPatientId(booking.patientId);
    setClinicId(booking.clinicId);
  }

  async function deleteBooking(id) {
    await axios.delete(`https://localhost:7171/api/Bookings?id=${id}`);
    alert('Booking Deleted Successfully');
    clearForm();
    loadBookings();
  }

  async function updateBooking(event) {
    event.preventDefault();
    try {
      await axios.put('https://localhost:7171/api/Bookings', {
        id,
        bookingDate,
        patientId,
        clinicId,
        patient: null,
      });
      alert('Booking Updated Successfully');
      clearForm();
      loadBookings();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setId('');
    setBookingDate('');
    setPatientId('');
    setClinicId('');
  };

  return (
    <div>
      <h1>Booking Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Booking Id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Booking Date</label>
            <input
              type="text"
              className="form-control"
              id="bookingDate"
              value={bookingDate}
              onChange={(event) => setBookingDate(event.target.value)}
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
            <button className="btn btn-primary mt-4 mr-4" onClick={saveBooking}>
              Add Booking
            </button>
            <button className="btn btn-warning mt-4" onClick={updateBooking}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Booking Id</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Patient Id</th>
            <th scope="col">Clinic Id</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {bookings.map((booking) => (
          <tbody key={booking.id}>
            <tr>
              <th scope="row">{booking.id} </th>
              <td>{booking.bookingDate}</td>
              <td>{booking.patientId}</td>
              <td>{booking.clinicId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning mr-3"
                  onClick={() => editBooking(booking)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteBooking(booking.id)}
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

export default BookingCrud;
