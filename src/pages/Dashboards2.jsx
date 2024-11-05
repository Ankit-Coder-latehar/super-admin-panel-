import React from 'react';
import Dashboard2Sidebar from '../components/Dashboard2.sidebar';
import BusinessTable from '../components/BusinessTable';

const Dashboards2 = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        
      {/* Sidebar */}
      <div className="w-1/13 bg-white min-h-screen ">
        <Dashboard2Sidebar />
      </div>

      {/* Main content (Business Table) */}
      <div className="flex-1 p-8 ">
        <BusinessTable />
      </div>
    </div>
  );
};

export default Dashboards2;
