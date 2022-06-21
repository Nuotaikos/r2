// import { useState } from "react";
import { useContext } from "react";
import Scooter from "./Scooter";
import ScooterContext from "./ScooterContext";

function List() {

  const { scooters } = useContext(ScooterContext);

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>List of Scooters</h2>
      </div>
      <div>
        <div className="card-body">
          <ul className="list-group">
            {
              scooters ? scooters.map(scooter => <Scooter key={scooter.id} scooter={scooter}></Scooter>) : null
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;