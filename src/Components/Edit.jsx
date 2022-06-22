import { useEffect, useState, useContext } from "react";
import rand from "../Function/rand";
import ScooterContext from "./ScooterContext";


function Edit() {

  const { modalData, setModalData, setEditData } = useContext(ScooterContext);


  const [registrationCode, setRegistrationCode] = useState(rand(10000000, 99999999));
  const [lastUseTime, setLastUseTime] = useState('');
  const [totalRideKilometres, setTalRideKilometres] = useState(0);
  const [busy, setBusy] = useState(1); //1 laisvas 0 uzimtas
  const [newDate, setNewDate] = useState('');
  const [newDistance, setNewDistance] = useState(0);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setRegistrationCode(modalData.registrationCode);
    setLastUseTime(modalData.lastUseTime);
    setTalRideKilometres(modalData.totalRideKilometres);
    setBusy(modalData.isBusy);
    setNewDate(modalData.newDate);
    setNewDistance(0);
  }, [modalData]);

  const handleEdit = () => {
    const data = { registrationCode, busy, lastUseTime, newDate, newDistance, totalRideKilometres: Number(totalRideKilometres) + Number(newDistance), id: modalData.id };
    setEditData(data);
    setModalData(null);
  }

  if (null === modalData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Scooter Changer</h5>
            <button type="button" className="close" onClick={() => setModalData(null)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="registration">Registration code</label>
                <input type="number" className="form-control" value={registrationCode} disabled></input>
              </div >
              <div class="form-group">
                <label for="formGroupExampleInput">Last use date</label>
                <input type="date" value={modalData.lastUseTime.slice(0, 10)} className="form-control" disabled />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">New date</label>
                <input type="date" onChange={e => setLastUseTime(e.target.value)} value={newDate} className="form-control" />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Distance</label>
                <input type="number" value={totalRideKilometres} className="form-control" disabled />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">New distance</label>
                <input type="number" onChange={e => setNewDistance(e.target.value)} value={newDistance} className="form-control" />
              </div>
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  Is Busy:
                </label>
                <input className="Busy" value={busy} checked={busy} onChange={e => setBusy(!busy)} type="checkbox" name="Busy" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setModalData(null)}>Close</button>
                <button type="button" className="btn btn-outline-info" onClick={handleEdit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;