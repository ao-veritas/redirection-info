import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './_pages/HomePage';
import RegisterProject from './_pages/RegisterProject';
import Saturn from './_pages/Saturn';
import Faucet from './_pages/Faucet';
import User from './_pages/User';
import About from './_pages/About';
import Dashboard from './_pages/Dashboard';
import ProjectRoute from './_pages/ProjectRoute';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterProject />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/about" element={<About />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project/:processID" element={<ProjectRoute />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;