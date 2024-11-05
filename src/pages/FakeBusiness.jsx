import React from 'react';
import FakeBusinessSidebar from '../components/FakeBusinessSidebar';
import FakeBusiness from '../components/FakeBusiness/FakeBusiness';
import FakeBusinessTable from '../components/FakeBusiness/FakeBusinessTable';
const FakeBusinessPage = () => {
  return (
    <div className="min-h-screen">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Fake Business
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <FakeBusinessSidebar />
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8 ">
          <FakeBusiness/>
          <FakeBusinessTable/>
        </div>
      </div>
    </div>
  );
};

export default FakeBusinessPage;
