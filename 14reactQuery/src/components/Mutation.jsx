// Mutation se ham data ko create, update aur delete kar sakte hai jiske liye 3 requests hai
/* 1. POST() => data ko add (create) karne ke liye
   2. PUT() => Data ko update kar ne ke liye
   3. Delete() => Data ko delete karne ke liye   */

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const addUser = async (user) => {
  // Yahan `user` ek object hai jo naye user ka data store karega
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  console.log("Response from API:", data); //
  return data;
};

const updateUser = async (user) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    user
  );
  return data;
};

const deleteUser = async (userId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  userId;
};

function Mutation() {
  const queryclient = useQueryClient(); // Cache manage karne ke liye

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryclient.invalidateQueries(["users"]); // cache ko refresh karega
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryclient.invalidateQueries(["users"]); // cache ko refresh karega
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryclient.invalidateQueries(["users"]); // cache ko refresh karega
    },
  });

  // from state variables
  const [newUser, setNewUser] = useState("");
  const [updateUserId, setUpdateUserId] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [deleteUserId, setDeleteUserId] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Query Mutation</h1>

      {/* Add user form */}
      <div className="mb-4 p-4 border rounded">
        <input
          type="text"
          placeholder="Enter username"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="border rounded px-3 py-2 mr-2"
        />
        <button
          onClick={() => addMutation.mutate({ name: newUser })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
        {addMutation.isLoading && <p className="mt-2 text-gray-500">Adding user...</p>}
        {addMutation.isError && <p className="mt-2 text-red-500">Error adding user.</p>}
        {addMutation.isSuccess && <p className="mt-2 text-green-500">User added successfully!</p>}
      </div>

      {/* Update user form */}
      <div className="mb-4 p-4 border rounded">
        <input
          type="text"
          placeholder="User Id"
          value={updateUserId}
          onChange={(e) => setUpdateUserId(e.target.value)}
          className="border rounded px-3 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="New name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          className="border rounded px-3 py-2 mr-2"
        />
        <button
          onClick={() => updateMutation.mutate({ id: updateUserId, name: updatedName })}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Update User
        </button>
        {updateMutation.isLoading && <p className="mt-2 text-gray-500">Updating user...</p>}
        {updateMutation.isError && <p className="mt-2 text-red-500">Error updating user.</p>}
        {updateMutation.isSuccess && <p className="mt-2 text-green-500">User updated successfully!</p>}
      </div>

      {/* Delete user form */}
      <div className="p-4 border rounded">
        <input
          type="text"
          placeholder="User Id to delete"
          value={deleteUserId}
          onChange={(e) => setDeleteUserId(e.target.value)}
          className="border rounded px-3 py-2 mr-2"
        />
        <button
          onClick={() => deleteMutation.mutate(deleteUserId)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete User
        </button>
         {deleteMutation.isLoading && <p className="mt-2 text-gray-500">Deleting user...</p>}
        {deleteMutation.isError && <p className="mt-2 text-red-500">Error deleting user.</p>}
        {deleteMutation.isSuccess && <p className="mt-2 text-green-500">User deleted successfully!</p>}
      </div>
    </div>
  );
}

export default Mutation;
