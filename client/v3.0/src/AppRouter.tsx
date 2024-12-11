import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./_pages/HomePage";
import ReactGA from "react-ga4";
// import RegisterProject from './_pages/RegisterProject';
// import Saturn from './_pages/Saturn';
// import Faucet from "./_pages/Faucet";
// import User from './_pages/User';
import About from "./_pages/About";
// import Dashboard from './_pages/Dashboard';
import ProjectRoute from "./_pages/ProjectRoute";
// import UserDashboard from './components/UserDashboard';
import ComingSoon from './_pages/ComingSoon';
import ProjectsDisplay from './_pages/ProjectsDisplay';
import ManageProcess from "./_pages/ManageProcess";
import Analysis from './_pages/Analysis';
import UnderConstruction from "./_pages/UnderConstruction";

const AppRouter: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        {/* <Route path="/register" element={<RegisterProject />} /> */}
        {/* <Route path="/saturn" element={<Saturn />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/faucet" element={<Faucet />} /> */}
        <Route path="/faucet" element={<UnderConstruction/>}/>
        <Route path="/projects" element={<ProjectsDisplay />} />
        {/* <Route path="/user" element={<UserDashboard />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/project/:processID" element={<ProjectRoute />} />
        <Route path="/manage" element={<ManageProcess />} />
        <Route path="*" element={<ComingSoon />} />
        <Route path='/project/:processID/analysis' element={<Analysis />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
