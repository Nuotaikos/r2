import { useContext } from "react";
import { useState } from "react";
import rand from "../Function/rand";
import ScooterContext from "./ScooterContext";


function Create() {

  const { setCreateData, disableCreate, setDisableCreate } = useContext(ScooterContext);

  const [registrationCode, setRegistrationCode] = useState(rand(10000000, 99999999));
  const [lastUseTime, setLastUseTime] = useState('');
  const [totalRideKilometres, SetTotalRideKilometres] = useState(0.0);

  const handleCreate = () => {
    setDisableCreate(true);
    const data = { registrationCode, lastUseTime, totalRideKilometres };
    setCreateData(data);
    setRegistrationCode(rand(10000000, 99999999));
    setLastUseTime('');
    SetTotalRideKilometres(0);
  }


  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new scooter</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Registration Code</label>
          <input type="text" className="form-control" onChange={e => setRegistrationCode(e.target.value)} value={registrationCode} />

        </div>
        <div className="form-group" >
          <label>Date</label>
          <input type="date" className="form-control" value={lastUseTime} onChange={e => setLastUseTime(e.target.value)} />
          <small className="form-text text-muted">Enter date</small>
        </div>
        <div className="form-group" >
          <label>Distance (km)</label>
          <input type="number" step="0.01" className="form-control" value={totalRideKilometres} onChange={e => SetTotalRideKilometres(e.target.value)} />
          <small className="form-text text-muted">Enter totalRideKilometres</small>
        </div>
        <button type="button" className="btn btn-outline-primary with-loader" onClick={handleCreate} disabled={disableCreate}>
          <span className="spinner-border spinner-border-sm mr-2"></span>
          <span className="spinner-text">Create</span>
        </button>
      </div>
    </div>
  );
}

export default Create;