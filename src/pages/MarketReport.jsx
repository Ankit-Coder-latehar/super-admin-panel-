import React from 'react';
import BusinessHistory from '../components/Marketerreport';
import MarketReportSidebar from '../components/MarketReportSidebar';



const MarketReport = () => {
  return (
    <div className="min-h-screen">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left ml-20 text-4xl font-bold text-[#5546A0]">
        Market Report
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-40px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen">
          <MarketReportSidebar/>
        </div>

        {/* Main content (Business Table) */}
        <div className="w-5/6 p-8">
          <BusinessHistory/>
        </div>
      </div>
    </div>
  );
};

export default MarketReport;