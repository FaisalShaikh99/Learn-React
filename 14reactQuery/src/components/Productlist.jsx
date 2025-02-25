import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const fetchData = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products`
  );
  return data;
};

const addProduct = async (product) => {
  const { data } = await axios.post("https://fakestoreapi.com/products", product);
  return data;
};

function Productlist() {
  const navigate = useNavigate();  // For navigation

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],  // Page number as part of the query key
    queryFn: fetchData,
   
  });

  const queryClient = useQueryClient(); // Cache management

  const addMutation = useMutation({
    mutationFn: addProduct,
    onMutate: (newProduct) => {
      queryClient.setQueryData(['products'], (oldData) => [...oldData, newProduct]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      navigate("/cart");  // Navigate to cart after adding a product
    },
  });

  const handleNextPage = () => {
    setPage((old) => {
      const newPage = old + 1;
      navigate("/cart");  // Navigate to the cart page on next button click
      return newPage;
    });
  };

  if (isLoading) return <p className="text-center text-blue-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Product list</h1>
      <ul className="w-full max-w-md space-y-3">
        {data.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded shadow hover:bg-gray-50 transition flex items-center"
          >
            <div className="w-24 h-24 mr-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-50 h-full object-cover rounded"
              />
            </div>
            <div>
              <h1 className="font-semibold text-gray-800">{product.title}</h1>
              <p className="text-gray-600 text-sm">{product.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 p-3"
                onClick={() => addMutation.mutate(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white p-2 mr-2"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}  // Call handleNextPage when Next is clicked
          className="bg-blue-500 text-white p-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Productlist;
  