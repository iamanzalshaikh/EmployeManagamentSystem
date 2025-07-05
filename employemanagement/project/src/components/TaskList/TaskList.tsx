import React from 'react';

const TaskList = ({ tasks }) => {
  const updateTaskStatus = (taskIndex, newStatus) => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const employees = JSON.parse(localStorage.getItem('employees'));
    
    const updatedEmployees = employees.map(emp => {
      if (emp.id === loggedInUser.id) {
        const updatedTasks = emp.tasks.map((task, index) => {
          if (index === taskIndex) {
            const updatedTask = { ...task };
            
            // Reset all statuses
            updatedTask.newTask = false;
            updatedTask.active = false;
            updatedTask.completed = false;
            updatedTask.failed = false;
            
            // Set new status
            updatedTask[newStatus] = true;
            
            return updatedTask;
          }
          return task;
        });
        
        // Recalculate task counts
        const taskCounts = {
          newTask: updatedTasks.filter(t => t.newTask).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length
        };
        
        return { ...emp, tasks: updatedTasks, taskCounts };
      }
      return emp;
    });
    
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    // Update logged in user data
    const updatedUser = updatedEmployees.find(emp => emp.id === loggedInUser.id);
    localStorage.setItem('loggedInUser', JSON.stringify({ ...updatedUser, role: 'employee' }));
    
    // Refresh page to show updated data
    window.location.reload();
  };

  const getStatusColor = (task) => {
    if (task.completed) return 'bg-green-600';
    if (task.failed) return 'bg-red-600';
    if (task.active) return 'bg-yellow-600';
    if (task.newTask) return 'bg-blue-600';
    return 'bg-gray-600';
  };

  const getStatusText = (task) => {
    if (task.completed) return 'Completed';
    if (task.failed) return 'Failed';
    if (task.active) return 'Active';
    if (task.newTask) return 'New';
    return 'Unknown';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task, index) => (
        <div key={index} className={`${getStatusColor(task)} p-4 rounded-lg text-white`}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold">{task.taskTitle}</h3>
            <span className="text-xs bg-black bg-opacity-30 px-2 py-1 rounded">
              {getStatusText(task)}
            </span>
          </div>
          <p className="text-sm mb-2">{task.taskDescription}</p>
          <p className="text-xs mb-2">Due: {task.taskDate}</p>
          <p className="text-xs mb-4">Category: {task.category}</p>
          
          <div className="flex gap-2 flex-wrap">
            {task.newTask && (
              <button
                onClick={() => updateTaskStatus(index, 'active')}
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-xs transition"
              >
                Accept Task
              </button>
            )}
            {task.active && (
              <>
                <button
                  onClick={() => updateTaskStatus(index, 'completed')}
                  className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-xs transition"
                >
                  Complete
                </button>
                <button
                  onClick={() => updateTaskStatus(index, 'failed')}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs transition"
                >
                  Mark Failed
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;