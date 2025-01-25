import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

    return (
        <header className="shadow sticky z-50 top-0 w-full m-0">
            <nav className="bg-white border-gray-200 shadow-md fixed top-0 left-0 w-full z-50 px-4 lg:px-6 py-2.5">
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        {/* Logo */}
    <Link to="/" className="flex items-center">
      <img
        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        className="mr-3 h-14"
        alt="Logo"
      />
    </Link>

    {/* Login & Signup Buttons */}
    <div className="flex items-center lg:order-2">
      <Link
        to="/login"
        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium  rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200"
        type='button'
        onClick={() => navigate('/login')}
      >
        Log in
      </Link>
      <Link
        to="/registration"
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mx-6 focus:outline-none transition duration-200"
        type='button'
        onClick={() => navigate('/registration')}
       
      >
        Get started
      </Link>
    </div>

    {/* Navigation Links */}
    <div
      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium text-xl lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 rounded-lg transition duration-200 ${
                isActive
                  ? "text-orange-700 font-semibold"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 rounded-lg transition duration-200 ${
                isActive
                  ? "text-orange-700 font-semibold"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 rounded-lg transition duration-200 ${
                isActive
                  ? "text-orange-700 font-semibold"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 rounded-lg transition duration-200 ${
                isActive
                  ? "text-orange-700 font-semibold"
                  : "text-gray-700 hover:text-orange-700"
              }`
            }
          >
            Github
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </header>
    );
}