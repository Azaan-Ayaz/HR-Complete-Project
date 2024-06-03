// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">HR Management</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/jobs" className="text-white hover:text-gray-300">Jobs</Link>
          <Link to="/create-job" className="text-white hover:text-gray-300">Post a Job</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
