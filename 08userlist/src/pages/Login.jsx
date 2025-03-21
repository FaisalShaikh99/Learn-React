import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleloginPage = (e) => {
    e.preventDefault();

     // isse register kara hua user ka data le sakte hai
     const existingUsers = JSON.parse(localStorage.getItem("users")) || []; 
     
     // ye check karta hai ki register huela user ka data aur login kar raha hai vo user ka data same hai ya nahi.
     const user = existingUsers.find(
      (user) =>  user.email === email && user.password === password
    );
     // agar data sahi hai to login success ka message print karao nahi to error batao
     if(user) {
      alert(`Welcome ${user.name}`);
      
     }else{
      setErrorMessage("Invalid userdata, please try again!");
     }

     navigate("/");
    }

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleloginPage}>

           <input type="email" 
                 placeholder='Enter your email address' 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                 required/>  <br />

           <input type="password" 
                 placeholder='Enter your password' 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 required/> <br />

           <button type='submit'>Login</button>               
        </form>
        {errorMessage && <p style={{color : "red"}}>{errorMessage}</p>}
      </div>
    </div>
  );
}
export default Login
