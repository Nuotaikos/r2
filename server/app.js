const express = require('express')
const app = express()
const port = 3003
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

//kelias
app.get('/', (req, res) => {
  res.send(' World!')
})

app.listen(port, () => {
  console.log(`Klausom porto Nr ${port}`)
})