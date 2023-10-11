import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const addTodo = (title) => {
    setTodo((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: new Date().getTime().toString(),
          title,
          completed: false,
        },
      ];
    });
  };

  const toggleTodo = (id) => {
    setTodo((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodo((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Todo app</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
