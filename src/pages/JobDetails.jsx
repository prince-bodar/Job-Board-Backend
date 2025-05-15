import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getJobById(id)
      .then(res => {
        setJob(res.data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  if (loading) return <p className='spinner'>Loading job details...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div className="container">
      <h2>{job.data.title}</h2>
      <p><strong>Company:</strong> {job.data.company}</p>
      <p><strong>Type:</strong> {job.data.type}</p>
      <p><strong>Location:</strong> {job.data.location}</p>
      <p><strong>Description:</strong> {job.data.description}</p>
    </div>
  );
};

export default JobDetails;
