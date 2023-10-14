import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const url = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async() => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.users);
      }
      catch(error){
        console.log(error);
      }
    };
    getUsers();
  },[]);

  return (
    <div className='main'>
      <h1>Dummy data</h1>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>
                  <img src={u.image} alt={u.username} height="30px" />
                </td>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>{u.gender}</td>
                <td>{u.email}</td>
                <td>{u.uername}</td>
                <td>{u.domain}</td>
                <td>{u.ip}</td>
                <td>{u.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
