const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "paspirtukai",
});

//Routes
//READ
app.get("/paspirtukai", (req, res) => {
  const sql = `
  SELECT
  *
  FROM scooters`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/paspirtukai", (req, res) => {
  const sql = `INSERT INTO scooters
(registrationCode, lastUseTime, totalRideKilometres	 )
VALUES (?, ?, ?)`;
  con.query(sql, [req.body.registrationCode, req.body.lastUseTime, req.body.totalRideKilometres], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
  });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/paspirtukai/:treeId", (req, res) => {
  const sql = `DELETE FROM scooters
WHERE id = ?`;
  con.query(sql, [req.params.treeId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
  });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/paspirtukai/:treeId", (req, res) => {
  const sql = `UPDATE scooters
    SET isBusy = ?, registrationCode = ?, lastUseTime = ?, totalRideKilometres = ?
    WHERE id = ?`;
  con.query(sql, [req.body.isBusy, req.body.registrationCode, req.body.lastUseTime, req.body.totalRideKilometres, req.params.treeId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
  });
});



app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});