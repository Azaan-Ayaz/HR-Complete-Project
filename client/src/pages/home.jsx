import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleHiringClick = () => {
    navigate('/create-job');
  };

  const handleCandidateClick = () => {
    navigate('/jobs');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6">HR Management System</h1>
        <p className="text-gray-700 mb-6">Please choose your role:</p>
        <div className="space-y-4">
          <button
            onClick={handleHiringClick}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Hiring Person
          </button>
          <button
            onClick={handleCandidateClick}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
