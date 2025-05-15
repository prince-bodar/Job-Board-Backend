import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3333/api/jobs',
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
