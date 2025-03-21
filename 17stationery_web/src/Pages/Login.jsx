import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../Images/logo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthenticated) {
      const userData = {
        name: user.name,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      // toast.success(`Welcome, ${user.name}!`);
      // navigate("/");
    }
  }, [user, isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const localUser = existingUser.find(
      (u) => u.email === email && u.password === password
    );

    if (localUser) {
      // toast.success(`Welcome, ${localUser.name}`);
      // navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-Background">
      <div className="flex bg-Background shadow-xl rounded-xl overflow-hidden w-[900px]">
        {/* Left Section with Image & Welcome Text */}
        <div className="w-1/2 bg-purple-300 flex flex-col justify-center items-center p-8">
          {/* <img src={logo} alt="Logo" className="w-100 h-100 " /> */}
          
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleLogin}
          className="w-1/2 p-10 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-Primary mb-8">Sign In</h2>

          {/* Email Input */}
          <div className="flex items-center border rounded-lg mb-6 p-4">
            <MdEmail className="text-Primary mr-3 text-2xl " />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full focus:outline-none text-lg text-Text font-semibold bg-Background"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border rounded-lg mb-8 p-4 relative">
            <RiLockPasswordFill className="text-Primary mr-3 text-2xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password (8-15 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={15}
              className="w-full focus:outline-none text-lg  text-Text font-semibold bg-Background"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash className="text-Primary" /> : <FaEye className="text-Primary" />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" font-semibold w-full bg-yellow-400 text-Accent text-xl p-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary transition  mb-6"
          >
            Sign in <FaArrowRight className="text-Accent text-xl  font-semibold" />
          </button>

          <p
            className="text-primary text-Accent  font-semibold cursor-pointer text-center text-xl"
            onClick={() => navigate("/register")}
          >
            Create an Account
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;