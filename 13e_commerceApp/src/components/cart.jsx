import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { removeCart, increaseQty, decreaseQty } from "../feature/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart); // ye product ke pure data ku select karta hai
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* ye button productlist ke page per render karega */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        🔙 Back to Products
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Shopping Cart</h1>

      {/* jab page empty hoga tab */}
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">🛍️ Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {/* Cart Items */}
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4"
            >
              {/* Image */}
              <div className="w-1/4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-28 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="w-1/2">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <h3 className="text-lg font-bold text-green-600">💰 ${product.totalPrice}</h3>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decreaseQty({ id: product.id }))}
                  className="bg-gray-300 text-lg px-3 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  ➖
                </button>
                <p className="text-xl font-semibold">{product.qty}</p>
                <button
                  onClick={() => dispatch(increaseQty({ id: product.id }))}
                  className="bg-gray-300 text-lg px-3 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  ➕
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeCart({ id: product.id }))}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          {/* Total Amount Section */}
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-gray-800">💰 Total: ${totalAmount.toFixed(2)}</h2>
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md"
                    onClick={() => navigate("/chekout")}>
              ✅ Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
