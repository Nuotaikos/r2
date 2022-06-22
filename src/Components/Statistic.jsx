import { useEffect, useState } from "react";
// function Statistic() {
function Statistic({ kolt }) {

  const [sum, setSum] = useState(0);

  useEffect(() => {

    let suma = 0;
    if (kolt.length !== 0) {
      kolt.forEach(e => {
        suma = parseFloat(e.totalRideKilometres) + suma;
        setSum(suma)
      })
    } else { setSum(0) }
  }, [kolt]);


  return (

    <div className="card mt-2 mb-4">
      <div className="card-header">
        <h2>Statistic</h2>
      </div>
      <div className="card-body">
        <div className="form-control">Total qty of scooters: <span>{kolt.length}</span></div>
      </div>
      <div className="card-body">
        <div className="form-control">Total ride km: <span>{sum.toFixed(2)}</span></div>
      </div>
    </div>
  );
}
export default Statistic;