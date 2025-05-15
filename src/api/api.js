import axios from 'axios';

const API = axios.create({
  baseURL: "https://job-board-backend-2y2z.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getAllJobs: () => API.get('/api/jobs/'),
  getJobById: (id) => API.get(`/api/jobs/${id}`),
  postJob: (data) => API.post('/api/jobs/', data),
  updateJob: (id, data) => API.put(`/api/jobs/${id}`, data),
  deleteJob: (id) => API.delete(`/api/jobs/${id}`),
};

export default api;
