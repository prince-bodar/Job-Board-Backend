import React, { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter jobs safely only if jobs is an array
  const filteredJobs = Array.isArray(jobs)
    ? jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  useEffect(() => {
    api
      .getAllJobs()
      .then((res) => {
        // Make sure to set jobs from res.data.data as your backend sends { success, message, data: [...] }
        setJobs(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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

        {/* Safely check if jobs is empty */}
        {(!Array.isArray(jobs) || jobs.length === 0) && <p>No jobs found.</p>}

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
