import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import ScooterContext from './Components/ScooterContext';
import axios from 'axios';
import Message from './Components/Message';
import Statistic from './Components/Statistic';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [scooters, setScooters] = useState(null);
  const [modalData, setModalData] = useState(null);


  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [message, setMessage] = useState(null);

  const [disableCreate, setDisableCreate] = useState(false);
  const [kolt, setKolt] = useState([]);

  //count Kolt

  useEffect(() => {
    axios.get('http://localhost:3003/paspirtukai')
      .then(res => {
        setKolt(res.data)
        console.log(res.data);
      });
  }, [lastUpdate]);


  // useEffect(() => {

  //   let data = localStorage.getItem('kolt')
  //   if (null === data) {
  //     localStorage.setItem('kolt', JSON.stringify([]));
  //     setKolt([]);
  //   } else {
  //     setKolt(JSON.parse(data));
  //   }
  // }, []);

  //Read
  useEffect(() => {
    axios.get('http://localhost:3003/paspirtukai')
      .then(res => {
        setScooters(res.data)
        console.log(res.data);
      });
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/paspirtukai', createData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
      .then(() => {
        setDisableCreate(false);
      })


  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/paspirtukai/' + deleteData.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/paspirtukai/' + editData.id, editData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);


  const showMessage = msg => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  }


  return (
    <ScooterContext.Provider value={
      {
        scooters,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
            <Statistic kolt={kolt}></Statistic>
          </div>
          <div className="col-8">
            <List></List>
          </div>
        </div>
      </div>
      <Edit />
      <Message />
    </ScooterContext.Provider>
  );


}
export default App;