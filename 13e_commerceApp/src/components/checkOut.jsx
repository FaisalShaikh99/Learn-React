import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false); // yaha state suruaat me false hai
  const [orderSuccess, setOrderSuccess] = useState(false);   // ye bhi suruaat me false hai

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);  // jab user submit button per click karega tab state true hojayega
  };

  const handleBuyNow = () => {
    if (!formSubmitted) return; // jab tak form submit nahi hoga tab tak buy btn kam nahi karega

    setOrderSuccess(true); //jab user buy button per click karega tab state true hojayega

    // ye ek message dene ki method hai yaha success msg diya gaya hai
    setTimeout(() => {
      setOrderSuccess(false);
      navigate("/"); // Redirect to Home after success
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition flex items-center"
      >
        🔙 Back to Products
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Summary</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600 text-center">🛍️ Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cart Details */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Details</h2>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                {/* Image */}
                {product.image && (
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain max-h-full"
                    />
                  </div>
                )}

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600">🎁 Buy two, get one free</p>
                  <h3 className="text-lg font-bold text-green-600 mt-1">
                    ${product.price.toFixed(2)} × {product.qty} = ${product.totalPrice.toFixed(2)}
                  </h3>
                </div>
              </div>
            ))}

            {/* Total Amount */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 text-right">
              Total: ₹{totalAmount.toFixed(2)}
            </h2>
          </div>

          {/* Checkout Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Fill Your Details</h2>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="text-gray-700">City</span>
                <select name="city" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg">
                  <option value="Patan">Patan</option>
                  <option value="Ahemedabad">Ahmedabad</option>
                  <option value="Mehasana">Mehasana</option>
                  <option value="Palanpur">Palanpur</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700">Full Name</span>
                <input type="text" placeholder="Enter your name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg" required />
              </label>

              <label className="block">
                <span className="text-gray-700">Email Address</span>
                <input type="email" placeholder="Enter your email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg" required />
              </label>

              <label className="block">
                <span className="text-gray-700">Phone Number</span>
                <input type="number" placeholder="Enter your number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg" required />
              </label>

              <label className="block">
                <span className="text-gray-700">Address</span>
                <input type="text" placeholder="Enter your Address" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg" required />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition"
              >
                 Submit 
              </button>
            </form>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className={`mt-4 w-full py-3 rounded-lg font-bold transition ${
                formSubmitted
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-400/50"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!formSubmitted}
            >
              ✅ Buy Now
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {orderSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">🎉 Order Successful!</h2>
            <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
