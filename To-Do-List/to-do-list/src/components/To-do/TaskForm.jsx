import React from "react";
import { useState } from "react";
export default function TaskForm() {
  const [inputValue, setInputValue] = useState("");
  const addNewTask = (inputValue) => {
    console.log(inputValue);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="form-container">
      <form action="" id="search-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          id="add-task-bar"
          placeholder="Add Task"
          className="form-item"
        />
        <button
          id="add-task-btn"
          className="form-item"
          onClick={() => {
            addNewTask(inputValue);
          }}>
          Add Task
        </button>
      </form>
    </div>
  );
}
