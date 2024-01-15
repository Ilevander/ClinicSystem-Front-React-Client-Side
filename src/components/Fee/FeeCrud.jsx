import axios from 'axios';
import { useEffect, useState } from 'react';

function FeeCrud() {
  const [feeId, setFeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [fees, setFees] = useState([]);

  useEffect(() => {
    (async () => await loadFees())();
  }, []);

  async function loadFees() {
    try {
      const response = await axios.get('https://localhost:7171/api/Fees');
      setFees(response.data);
    } catch (error) {
      console.error('Error fetching fees:', error);
    }
  }

  async function saveFee(event) {
    event.preventDefault();
    try {
      await axios.post('https://localhost:7171/api/Fees', {
        amount: parseInt(amount),
        doctorId: parseInt(doctorId),
      });
      alert('Fee Added Successfully');
      clearForm();
      loadFees();
    } catch (err) {
      alert(err);
    }
  }

  async function editFee(fee) {
    setFeeId(fee.feeId);
    setAmount(fee.amount);
    setDoctorId(fee.doctorId);
  }

  async function deleteFee(id) {
    await axios.delete(`https://localhost:7171/api/Fees?id=${id}`);
    alert('Fee Deleted Successfully');
    clearForm();
    loadFees();
  }

  async function updateFee(event) {
    event.preventDefault();
    try {
      await axios.put('https://localhost:7171/api/Fees', {
        feeId: parseInt(feeId),
        amount: parseInt(amount),
        doctorId: parseInt(doctorId),
      });
      alert('Fee Updated Successfully');
      clearForm();
      loadFees();
    } catch (err) {
      alert(err);
    }
  }

  const clearForm = () => {
    setFeeId('');
    setAmount('');
    setDoctorId('');
  };

  return (
    <div>
      <h1>Fees Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Fee Id</label>
            <input
              type="text"
              className="form-control"
              id="feeId"
              value={feeId}
              onChange={(event) => setFeeId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
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
            <button className="btn btn-primary mt-4 mr-4" onClick={saveFee}>
              Add Fee
            </button>
            <button className="btn btn-warning mt-4" onClick={updateFee}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Fee Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Doctor Id</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {fees.map((fee) => (
          <tbody key={fee.feeId}>
            <tr>
              <th scope="row">{fee.feeId} </th>
              <td>{fee.amount}</td>
              <td>{fee.doctorId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning mr-4"
                  onClick={() => editFee(fee)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteFee(fee.feeId)}
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

export default FeeCrud;
