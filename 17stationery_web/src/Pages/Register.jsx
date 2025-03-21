import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaUser,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password Length Validation
    if (password.length < 8 || password.length > 15) {
      toast.error("❌ Password must be between 8-15 characters!");
      return;
    }

    const newUser = { name, email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for Duplicate Email
    const isUserExist = existingUsers.some((user) => user.email === email);
    if (isUserExist) {
      toast.error("❌ Your email already exists, please login!");
      return;
    }

    // Save New User
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("isUserExist", JSON.stringify(true));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    // Clear Input Fields
    setName("");
    setEmail("");
    setPassword("");

    // Success Message and Redirect
    toast.success(`✅ Welcome, ${name}! Registration Successful!`);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="bg-Background min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-6xl shadow-lg rounded-xl overflow-hidden">
        {/* Left Side with Image and Welcome Text */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-cover bg-center" 
             style={{ backgroundImage: "url(' https://i.pinimg.com/736x/11/7c/94/117c94eb1f1c7e0cfd871162d2db2381.jpg')" }}>
          <h1 className="text-Background text-5xl ml-3 mb-20 font-bold">Welcome to <span className="text-yellow-400">Stationery</span>  World</h1>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 bg-primary p-8 rounded-xl">
          <form
            onSubmit={handleSubmit}
            className="w-full"
          >
            {/* Heading with Main Icon */}
            <div className="flex items-center justify-center mb-6">
              <FaUserPlus className="text-Primary text-4xl mr-2" />
              <h2 className="text-3xl font-bold text-Primary">Create an Account</h2>
            </div>

            {/* Input with Icon - Name */}
            <div className="flex items-center border rounded-lg mb-4 p-3">
              <FaUser className="text-Primary mr-3 text-xl" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full focus:outline-none bg-Background text-Text font-semibold"
              />
            </div>

            {/* Input with Icon - Email */}
            <div className="flex items-center border rounded-lg mb-4 p-3">
              <MdEmail className="text-Primary mr-3 text-xl" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full focus:outline-none bg-primary bg-Background text-Text font-semibold"
              />
            </div>

            {/* Input with Icon & Eye - Password */}
            <div className="flex items-center border rounded-lg mb-6 p-3 relative">
              <RiLockPasswordFill className="text-Primary mr-3 text-xl" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password (8-15 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                maxLength={15}
                className="w-full focus:outline-none bg-primary bg-Background text-Text font-semibold"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 cursor-pointer"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-Primary" />
                ) : (
                  <FaEye className="text-Primary" />
                )}
              </span>
            </div>

            {/* Submit Button with Icon */}
            <button
              type="submit"
              className="bg-yellow-400 w-full bg-secondary text-Accent font-semibold text-2xl p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-Primary transition"
            >
              Submit <FaArrowRight className="text-Accent text-lg hover:text-Primary " />
            </button>
            <p
              className="text-Primary font-semibold cursor-pointer mt-4 text-center text-xl border-x-2 border-transparent rounded-lg hover:text-purple-500 hover:border-purple-500 "
              onClick={() => navigate("/login")}
            >
              Sign in
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
