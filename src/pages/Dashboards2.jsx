import React from 'react';
import Sidebar from '../components/Sidebar';
import BusinessTable from '../components/BusinessTable';

const Dashboards2 = () => {
  return (
    <div className="flex min-h-screen">
        
      {/* Sidebar */}
      <div className="w-1/13 bg-purple-700 min-h-screen ">
        <Sidebar />
      </div>

      {/* Main content (Business Table) */}
      <div className="w-5/6 p-8">
        <BusinessTable />
      </div>
    </div>
  );
};

export default Dashboards2;
