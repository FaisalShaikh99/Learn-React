import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../feature/cartSlice";
import { ToastContainer, toast } from 'react-toastify';

function ProductDetail() {
  const { id } = useParams();  // iska use URL product ki id dene ke liye use hua hai
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  {/* yaha hamne api call ki hai qunki user alag alag product ko le sake jis ko ham 
  daynamic kehte hai isiliye hamne useselector ka use nahi kiya aur isiliye sab product ki id differnt hai*/}
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">⏳ Loading...</p>
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">❌ Product Not Found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
     
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        🔙 Back to Products
      </button>

     
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full p-6 flex flex-col md:flex-row gap-6">
     
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        
        <div className="flex flex-col justify-between w-full">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg mt-2">{product.description}</p>
          <h2 className="text-2xl font-bold text-green-600 mt-4">💰 ${product.price.toFixed()}</h2>

          <button
            onClick={() => {
              dispatch(addToCart(product))
              toast("Added Your Cart!")
            }}
            className="mt-6 bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            🛒 + Add To Cart
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
