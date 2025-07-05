import React, { useState, useEffect } from 'react';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    setEmployees(employeesData || []);
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-white mb-5">Employee Task Overview</h2>

      {/* Header Row */}
      <div className="hidden sm:flex py-3 px-4 rounded-lg text-sm font-semibold text-white bg-gray-700 mb-4">
        <div className="w-1/5 px-2">Employee</div>
        <div className="w-1/5 text-center text-blue-300">New</div>
        <div className="w-1/5 text-center text-yellow-300">Active</div>
        <div className="w-1/5 text-center text-green-300">Completed</div>
        <div className="w-1/5 text-center text-red-300">Failed</div>
      </div>

      {/* Employee Task Rows */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col items-center justify-between bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition"
          >
            {/* Employee Name */}
            <div className="w-full sm:w-1/5 font-medium text-white text-center sm:text-left">
              {emp.name || emp.firstName || "Unnamed"}
            </div>

            {/* Task Stats */}
            <div className="w-full sm:w-4/5 flex justify-around text-sm font-semibold gap-2 mt-2 sm:mt-0">
              <span className="px-3 py-1 rounded bg-blue-600 text-white min-w-[40px] text-center">
                {emp.taskCounts.newTask}
              </span>
              <span className="px-3 py-1 rounded bg-yellow-600 text-white min-w-[40px] text-center">
                {emp.taskCounts.active}
              </span>
              <span className="px-3 py-1 rounded bg-green-600 text-white min-w-[40px] text-center">
                {emp.taskCounts.completed}
              </span>
              <span className="px-3 py-1 rounded bg-red-600 text-white min-w-[40px] text-center">
                {emp.taskCounts.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;