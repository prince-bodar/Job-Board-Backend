import React, { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    api
      .getAllJobs()
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

if (loading) {
  return <div className="spinner">Loading jobs...</div>;
}

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <div className="space">
      <Link to="/add-job" className="btn-add">
        + Add Job
      </Link>
      {jobs.length === 0 && <p>No jobs found.</p>}
      <input
        className="search"
        type="text"
        placeholder="Search by title or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

      {filteredJobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Home;
