import React from 'react';
import SubscriptionForm from '../components/SubscriptionForm';
import Sidebar from '../components/Sidebar';



const Subscription2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Subscription
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <Sidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="w-5/6 p-8">
          <SubscriptionForm/>
        </div>
      </div>
    </div>
  );
};

export default Subscription2;