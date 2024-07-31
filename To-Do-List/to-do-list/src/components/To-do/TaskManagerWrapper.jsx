import React from "react";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

export default function TaskManagerWrapper() {
  return (
    <div className="TaskManagerWrapper">
      <TaskForm></TaskForm>
      <div className="container">
        <table className="task-table">
          <thead>
            <tr>
              <th id="id">ID</th>
              <th id="task">Task</th>
              <th id="delete">Delete</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
