import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

function Products() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    // fetch data
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products', page],
        queryFn: async () => {
            const res = await axios.get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(page - 1) * itemsPerPage}`);
            return res.data.products;                     
        },
        keepPreviousData: true,
        staleTime : 5000, 
    });

    const totalPages = Math.ceil(200 / itemsPerPage);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">🛒 My Store</h2>

                {/* Loading & Error States */}
                {isLoading && <p className="text-center text-lg text-gray-700">⏳ Loading products...</p>}
                {error && <p className="text-center text-lg text-red-500">⚠️ Error: {error.message}</p>}

                {/* Product Grid */}
                {!isLoading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-4">
                                <div className="relative w-full h-48 rounded-md overflow-hidden">
                                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover"/>
                                    <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 text-xs rounded-md">{product.category}</span>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">⭐ {product.rating} / 5</p>
                                    <p className="text-xl font-bold text-purple-600 mt-2">₹{product.price}</p>
                                    <button className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-10 space-x-4">
                        <button
                            className={`px-5 py-2 rounded-lg text-white ${page > 1 ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-300 cursor-not-allowed'}`}
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page <= 1}
                        >
                            ⬅ Prev
                        </button>
                        <p className="text-lg font-semibold">
                            Page {page} of {totalPages}
                        </p>
                        <button
                            className={`px-5 py-2 rounded-lg text-white ${page < totalPages ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-300 cursor-not-allowed'}`}
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={page >= totalPages}
                        >
                            Next ➡
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
