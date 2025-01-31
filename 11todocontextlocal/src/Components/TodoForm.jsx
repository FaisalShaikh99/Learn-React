import React, { useState } from "react";
import { useTodo } from "../context";
function TodoForm() {
  const [todo, setTodo] = useState();
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      addTodo({ todo, completed: false });
      setTodo("");
    }
  };
  return (
    <form
      onSubmit={add}
      className="mx-auto flex items-center bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 w-full max-w-lg"
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-1 px-4 py-2 text-white bg-transparent outline-none placeholder-gray-300 focus:ring-2 focus:ring-purple-500"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 text-white font-medium transition-all rounded-r-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
