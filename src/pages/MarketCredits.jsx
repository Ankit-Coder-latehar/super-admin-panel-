import React from 'react';
import Sidebar from '../components/Sidebar';
import MarketCredit from '../components/MarketCredithistory/MarketCredit';
import MarketReportSidebar from '../components/MarketReportSidebar';
import MarketerSidebar from '../components/MarketerSidebar';

const MarketCredits = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Market Credit History
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <MarketerSidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8">
          <MarketCredit />
        </div>
      </div>
    </div>
  );
};

export default MarketCredits;
