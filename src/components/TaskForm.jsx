import React, { useState } from 'react';
import { submitTask } from '../api';

const TaskForm = ({ token, onTaskAdded }) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const newTask = await submitTask({ title, description }, token);
  
  if (newTask) {
    onTaskAdded(newTask.data); 
    setTitle('');
    setDescription('');
  }
};
  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  };

  const headerStyle = {
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    height: '120px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={headerStyle}>Create New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={textareaStyle}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
      >
        Submit Task
      </button>
    </form>
  );
};

export default TaskForm;
