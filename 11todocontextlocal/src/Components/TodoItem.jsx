import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { editTodo, deleteTodo, toggleComplete } = useTodo();

  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`ml-20 flex items-center border border-white/20 rounded-lg px-5 py-3 gap-3 shadow-md transition-all w-full max-w-md ${
        todo.completed ? "bg-green-400/20" : "bg-purple-400/20"
      }`}
    >
      {/* Checkbox for Completing Todo */}
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-purple-500 rounded"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Input Field */}
      <input
        type="text"
        className={`flex-1 px-3 py-2 text-white bg-transparent outline-none border rounded-lg transition-all ${
          isTodoEditable ? "border-white/30" : "border-transparent"
        } ${todo.completed ? "line-through opacity-50" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit & Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            updateTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg transition-all shadow-md disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-lg transition-all shadow-md"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
