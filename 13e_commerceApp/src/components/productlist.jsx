import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="h-52 flex justify-center items-center bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold truncate">
                📦 {product.title}
              </h2>
              <p className="text-xl font-bold text-green-600 mt-2">
                💰 ${product.price.toFixed(2)}
              </p>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                🛒 + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
