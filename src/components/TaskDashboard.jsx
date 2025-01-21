import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../api';
import TaskForm from './TaskForm';

const TaskDashboard = ({ token }) => {

const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) {
      const loadTasks = async () => {
        const fetchedTasks = await fetchTasks(token);
        setTasks(fetchedTasks);
      };
      loadTasks();
    }
  }, [token]);
  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); 
  };

  const dashboardStyle = {
    backgroundColor: '#f5f5f5', 
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '40px auto',
  };

  const headerStyle = {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const taskListStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    maxHeight: '500px',
    overflowY: 'auto',
  };

  const taskItemStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '15px 0',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  };

  const taskItemHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className={dashboardStyle}>
      <h2 style={headerStyle}>Your Tasks</h2>
      <TaskForm token={token} onTaskAdded={handleTaskAdded} />
      <ul style={taskListStyle}>
        {tasks.map((task) => (
          <li key={task._id} 
           style={{
              ...taskItemStyle,
              ':hover': taskItemHoverStyle,
            }}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
