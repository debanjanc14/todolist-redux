import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodo } from "./todoSlice";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTodo({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodo());
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add task</button>
      <button className="delete-all" onClick={handleDeleteAll}>
        delete all
      </button>
    </div>
  );
}

export default AddTodo;
