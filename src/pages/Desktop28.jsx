import React from 'react';
import Sidebar from '../components/Sidebar';
import Desktop28Form from '../components/Desktop28/Desktop28';

const Desktop28 = () => {
  return (
    <div className="min-h-screen">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
      Admins
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <Sidebar />
        </div>

        {/* Main content (Business Table) */}
        <div className="w-5/6 p-8">
          <Desktop28Form/>
        </div>
      </div>
    </div>
  );
};

export default Desktop28;