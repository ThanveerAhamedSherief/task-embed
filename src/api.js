import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;


export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data.token;
};


export const fetchTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const submitTask = async (task, token) => {
  const response = await axios.post(`${API_URL}/tasks/submit`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
