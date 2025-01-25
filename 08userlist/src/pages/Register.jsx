import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // navigation ke liye

  const submition = (e) => {
    e.preventDefault();

    const users = { name, email, password };
    const existingUser = JSON.parse(localStorage.getItem("users")) || []; // json.parse ye local storage se users ke name ki key ka data nikal ta hai agar data maujud nahi hai to null dikhata hai
    existingUser.push(users); // ye new user ko push karta hai users me
    localStorage.setItem("users", JSON.stringify(existingUser)); // ye sabhi data ko string me badal ta hai

    // clear the form

    setName("");
    setEmail("");
    setPassword("");

    alert("Registration successfully");

    navigate("/login");

  };
  return (
    <div>
      <div>
        <h1>Registration</h1>
      </div>
      <div>
        <form onSubmit={submition}>
          <input
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit"
                  >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
