import React from 'react';
import Sidebar from '../components/Sidebar';
import Desktop14Form from '../components/Desktop14/Desktop14';
import FakeBusinessSidebar from '../components/FakeBusinessSidebar';
import Dashboard2Sidebar from '../components/Dashboard2.sidebar';
const Desktops14 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Business
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <FakeBusinessSidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8">
          <Desktop14Form/>
        </div>
      </div>
    </div>
  );
};

export default Desktops14;