import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import Dashboard from '../components/MarketReportTable';
import ClearDashboard from '../components/Dashboard';

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        
      {/* Sidebar */}
      <div className="w-1/13 bg-white min-h-screen ">
        <DashboardSidebar/>
      </div>

      {/* Main content (Business Table) */}
      <div className="flex-1 p-8 ">
        {/* <Dashboard/> */}
        <ClearDashboard/>
      </div>
    </div>
  );
};

export default DashboardHome;
