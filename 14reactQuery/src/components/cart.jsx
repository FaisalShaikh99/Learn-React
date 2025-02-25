import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async ({ queryKey }) => {
  const [ page] = queryKey; // Page is the second parameter in queryKey
  const limit = 5;  // Number of products per page
  const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`);
  return data;
};

const editProduct = async (product) => {
  const { data } = await axios.put(
    `https://fakestoreapi.com/products/${product.id}`,
    product
  );
  return data;
};

const deleteProduct = async (productId) => {
  await axios.delete(`https://fakestoreapi.com/products/${productId}`);
};

function Cart() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);  // Track the current page number

  // Fetch Products with pagination
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page], // Include page in queryKey
    queryFn: fetchProducts,
    keepPreviousData: true,  // Keep old data while new data is being fetched
  });

  // Edit Mutation
  const updateMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter products based on search
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 My Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block mx-auto mb-6 p-2 w-1/2 border border-gray-300 rounded"
      />

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center p-4 mb-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 object-contain"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
            <div className="ml-auto flex gap-4">
              <button
                onClick={() => updateMutation.mutate(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMutation.mutate(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products found!</p>
      )}

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Previous
        </button>
        
      </div>
    </div>
  );
}

export default Cart;
