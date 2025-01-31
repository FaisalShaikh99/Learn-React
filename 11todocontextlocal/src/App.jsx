import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm } from "./components";
import { TodoItem } from "./components";

function App() {
  /* yaha todos ek array hai jisme many values hai */
  const [todos, setTodos] = useState([]);

  /* yaha addtodo karne ke liye todo value ki jarurat hai
    setTodos((old) yaha old  oldtodo ki value lata hai*/
  const addTodo = (todo) => {
    setTodos((old) => [{ id: Date.now(), ...todo }, ...old]);
  };

  const editTodo = (id, todo) => {
    setTodos((old) =>
      old.map((oldTodo) => (oldTodo.id === id ? todo : oldTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((old) => old.filter((oldTodo) => oldTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((old) =>
      old.map((oldTodo) =>
        oldTodo.id === id
          ? { ...oldTodo, completed: !oldTodo.completed }
          : oldTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, editTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gradient-to-br from-[#172842] to-[#0f1a30] min-h-screen p-12 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl shadow-xl rounded-lg px-8 py-6">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">
            Manage Your Todos
          </h1>

          {/* Todo Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="space-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
