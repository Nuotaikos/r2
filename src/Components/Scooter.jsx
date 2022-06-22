import { useContext } from "react";
import ScooterContext from "./ScooterContext";




function Scooter({ scooter }) {

  const { setDeleteData, setModalData } = useContext(ScooterContext);

  const handleDelete = () => {
    setDeleteData(scooter);
  }

  const handleEdit = () => {
    setModalData(scooter);
  }

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content space">
          <b>{scooter.registrationCode}</b>
          <span> {scooter.lastUseTime.slice(0, 10)} </span>
          <u> {scooter.totalRideKilometres} </u>
          <span>{['Free', 'Busy'][scooter.isBusy - 1]}</span>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-info  ml-2" onClick={handleEdit}>Edit</button>
          <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Scooter;