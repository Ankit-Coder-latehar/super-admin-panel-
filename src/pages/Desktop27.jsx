import React from 'react';
import AdminSidebar from "../components/AdminSidebar"
import Desktop27Form from '../components/Desktop27/Desktop27';

const Desktop27 = () => {
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
          <AdminSidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="w-5/6 p-8">
          <Desktop27Form/>
        </div>
      </div>
    </div>
  );
};

export default Desktop27;