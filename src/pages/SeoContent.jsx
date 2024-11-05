import React from 'react';
import SeoSidebar from '../components/SeoSidebar';
import SearchBar from '../components/seoContents/SeoContent';
import SeoTable from '../components/seoContents/SeoTable';

const SeoContent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Heading */}
      <div className="bg-gray-100 p-4 text-left text-[#5546A0] ml-10 text-4xl font-bold ">
        Seo Content
      </div>

      {/* Main layout with Sidebar and Business Table */}
      <div className="flex bg-gray-100 mt-[-60px]">
        {/* Sidebar */}
        <div className="w-1/9 bg-purple-700 min-h-screen mt-10">
          <SeoSidebar />
        </div>

        {/* Main content (Business Table) */}
        <div className="flex-1 p-8 mt-10">
        <SearchBar />
          <SeoTable />
        </div>
      </div>
    </div>
  );
};

export default SeoContent;
