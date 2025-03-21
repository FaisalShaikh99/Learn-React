import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toast ke styles ko import karna zaroori hai!
import Privateroute from "./components/privateRoute";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import AppLayout from "./components/appLayout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <Privateroute>
              <Home />
            </Privateroute>
          ),
        },
        {
          path: "/about",
          element: (
            <Privateroute>
              <About />
            </Privateroute>
          ),
        },
        {
          path: "/shop",
          element: (
            <Privateroute>
              <Shop />
            </Privateroute>
          ),
        },
        {
          path: "/contact",
          element: (
            <Privateroute>
              <Contact />
            </Privateroute>
          ),
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* Yahan ToastContainer Add Karo */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
