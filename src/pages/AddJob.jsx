import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    type: 'Full-time',
    location: '',
    description: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.postJob(form);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add job');
    }
  };

  return (
    <div className="container">
      <h2>Add Job</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <select name="type" onChange={handleChange} value={form.type}>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;
