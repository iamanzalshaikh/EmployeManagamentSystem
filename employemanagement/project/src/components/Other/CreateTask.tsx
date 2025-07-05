import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    // Get current employees data
    const employees = JSON.parse(localStorage.getItem('employees'));
    
    // Find the employee to assign the task to
    const updatedEmployees = employees.map(emp => {
      if (emp.name === assignTo || emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1
          }
        };
      }
      return emp;
    });

    // Update localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    alert(`Task "${taskTitle}" assigned to ${assignTo}`);

    // Reset form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Create New Task</h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task Title"
          required
          className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
        />

        <input
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
          placeholder="Assign to (Employee Name)"
          required
          className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
        />

        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
          required
          className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none md:col-span-2"
          rows="3"
        />

        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          required
          className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g., dev, design)"
          required
          className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition md:col-span-2"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;