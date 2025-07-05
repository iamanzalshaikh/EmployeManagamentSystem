import React from "react";
import Header from "../Other/Header";
import TaskList from "../TaskList/TaskList";



const EmployeeDashboard = (props) => {
  const userData = props?.userData || null;
  const handleLogout = props?.handleLogout || (() => {});

  // ⚠️ Check if userData exists
  if (!userData) {
    return (
      <div style={{ padding: "20px", color: "white", backgroundColor: "#111", minHeight: "100vh" }}>
        <h2>⚠️ Error: No user data available. Please login again.</h2>
      </div>
    );
  }

  // 🛡️ Fallbacks if taskCounts or tasks are missing
  const taskCounts = userData.taskCounts || {
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0,
  };

  const tasks = userData.tasks || [];

  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#111", minHeight: "100vh" }}>
      <Header userData={userData} handleLogout={handleLogout} />
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-600 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{taskCounts.newTask}</h3>
            <p>New Tasks</p>
          </div>
          <div className="bg-yellow-600 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{taskCounts.active}</h3>
            <p>Active Tasks</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{taskCounts.completed}</h3>
            <p>Completed</p>
          </div>
          <div className="bg-red-600 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{taskCounts.failed}</h3>
            <p>Failed</p>
          </div>
        </div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
