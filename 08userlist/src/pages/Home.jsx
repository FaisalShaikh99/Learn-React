import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
 
  // ye step local storage se user ka data lata hai
  useEffect(() => {
    const storeUsers = JSON.parse(localStorage.getItem("users")) || [];
    // ye user ka sara data state me store karta hai
    setUsers(storeUsers);
  }, []);

  const onClickLogoutBtn = () => {   
    navigate("/login");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h2>User List</h2>
      
      {users.length > 0 ? (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
            
          </thead>
          <tbody>
            {/* map(): यह JavaScript का method है, जो array के प्रत्येक 
             element (यहाँ user object) पर callback function चलाता है और उसका output return करता है।
       */}
            {users.map((user, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>User not found</p>
      )}
      <button onClick={onClickLogoutBtn}>Logout</button>
    </div>
  );
}

export default Home
