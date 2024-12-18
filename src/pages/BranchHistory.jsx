import React from 'react';
import Sidebar from '../components/Sidebar';
import Branches2 from '../components/Branch/Branches2';
import BranchTableHistory from '../components/Branch/BranchhistoryTable';
const BranchHistory = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-gray-800">
        Branches
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <Sidebar />
        </div>

        {/* Main content (Business Table) */}
        <div className="w-5/6 p-8">
          <Branches2/>
          <BranchTableHistory/>
        </div>
      </div>
    </div>
  );
};

export default BranchHistory;
