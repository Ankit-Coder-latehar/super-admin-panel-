import React from 'react';
import Navbar from '../components/DashboardNavbar';
import ClearDashboard from '../components/Dashboard';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 p-0 sm:p-6 sm:mt-4">
        {/* Dashboard Content */}
        <div className="bg-gray-100  p-8">
          <ClearDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



