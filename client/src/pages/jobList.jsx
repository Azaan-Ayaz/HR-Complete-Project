// src/components/JobList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs'); // Ensure this URL is correct
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
