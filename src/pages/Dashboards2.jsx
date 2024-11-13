import React from 'react';
import Dashboard2Sidebar from "../components/Dashboard2/Dashboard2.sidebar";
import BusinessTable from "../components/Dashboard2/BusinessTable";

const Dashboards2 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Visible only on larger screens */}
      <div className=" lg:block">
        <Dashboard2Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6">
        <div className="bg-gray-50 p-4 lg:p-8">
          <BusinessTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboards2;
