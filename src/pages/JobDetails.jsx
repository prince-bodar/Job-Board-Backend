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
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
    </div>
  );
};

export default JobDetails;
