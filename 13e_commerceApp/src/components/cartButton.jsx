import React from "react";
import { useNavigate } from "react-router-dom"; // Fixed import
import { useSelector } from "react-redux";

function CartButton() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="fixed top-6 right-6">
      <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
        {/* Cart Count */}
        <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white shadow-md">
          {cart.length}
        </div>
        
        {/* Cart Icon */}
        <svg
          className="h-12 w-12 text-gray-800 hover:text-indigo-600 transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
              14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 
              2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 
              14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 
              0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartButton;
