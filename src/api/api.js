import axios from 'axios';

const API = axios.create({
  baseURL: "https://job-board-backend-2y2z.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getAllJobs: () => API.get('/'),
  getJobById: (id) => API.get(`/${id}`),
  postJob: (data) => API.post('/', data),
  updateJob: (id, data) => API.put(`/${id}`, data),
  deleteJob: (id) => API.delete(`/${id}`),
};

export default api;
