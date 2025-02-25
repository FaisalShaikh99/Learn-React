import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Products/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
