import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Common/LandingPage';
import LoginPage from './Components/Common/LoginPage';
import RegisterPage from './Components/Common/RegisterPage';
import CitizenDashboard from './Components/User/CitizenDashboard';
import ReportIssuePage from './Components/User/ReportIssuePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* User Specific Routes */}
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/report-issue" element={<ReportIssuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;