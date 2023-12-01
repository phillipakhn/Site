import React from 'react';
import './CSS/Jobs.css';

const Jobs = ({ jobs = [] }) => {
  return (
    <div className="jobs-grid">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <a href={job.applicationLink} className="apply-button">Apply</a>
        </div>
      ))}
    </div>
  );
}

export default Jobs;