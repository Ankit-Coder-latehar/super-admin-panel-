import React from 'react';
import Sidebar from '../components/Sidebar';
import Desktop6Form from '../components/Desktop6/Desktop6';
import Desktop9Form from '../components/Desktop9/Desktop9';
import Dashboard2Sidebar from '../components/Dashboard2.sidebar';
import Desktop9Sidebar from '../components/Desktop9/Desktop9Sidebar';

const Desktops9 = () => {
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
          <Dashboard2Sidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8">
          <Desktop9Form/>
        </div>
      </div>
    </div>
  );
};

export default Desktops9;