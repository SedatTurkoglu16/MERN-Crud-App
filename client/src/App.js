import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import EditUser from './components/EditUser';
import Home from './components/Home';

function App() {
  
  const [users, setUsers] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', location: '', hobby: ''
  });

  const [currUser, setCurrUser] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', location: '', hobby: '', id: ''
  });
  
  useEffect(() => {
    axios.get('http://localhost:5000').then((res) => {
      const data = res.data;
      setUsers(data);
    })
  },[users])
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home setCurrUser={setCurrUser} users={users} />} />
        <Route path={`/edit/${currUser.id}`} element={<EditUser currUser={currUser} />} />
      </Routes>
    </Router>
  );
}

export default App; 