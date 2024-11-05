import React from 'react';
import Subscription from '../components/Subscription';
import Sidebar from '../components/Sidebar';



const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Subscriptions
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <Sidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8">
          <Subscription/>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;