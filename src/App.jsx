

import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import TaskDashboard from './components/TaskDashboard';
import './App.css'

const App = () => {
  const [token, setToken] = useState('');
  return (
    <div>
      {!token ? (
        <LoginForm setToken={setToken} />
      ) : (
        <>
          <TaskDashboard token={token} />
        </>
      )}
    </div>
  );
};

export default App;

