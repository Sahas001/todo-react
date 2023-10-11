import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    console.log("hello");
    onSubmit(item);
    setItem("");
  };

  return (
    <form className="flex-column gap-2 m-5 " onSubmit={handleSubmit}>
      <div className="flex flex-column gap-4 justify-center">
        <input
          type="text"
          className="m-4 p-2 text-xl border outline-none"
          placeholder="Enter the tasks..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-20">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
