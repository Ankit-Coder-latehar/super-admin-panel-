import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineDown } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';

const BusinessHistory = () => {
  const [dateRange, setDateRange] = useState('Jul 11, 2024 - Jul 12, 2025');
  const [business, setBusiness] = useState('Select business');

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-gray-100">
      {/* Header Filters */}
      <div className="w-full max-w-6xl bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Date Range Section */}
          <div className="w-full mb-6 md:mb-0 md:w-1/3">
            <label className="block text-gray-700 font-medium mb-2">Date Range</label>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-inner">
              <AiOutlineCalendar className="mr-2 text-gray-500" />
              <span>{dateRange}</span>
              <AiOutlineDown className="ml-2 text-gray-500" />
            </div>
          </div>
          
          {/* Marketer Name Section */}
          <div className="w-full mb-6 md:mb-0 md:w-1/3">
            <label className="block text-gray-700 font-medium mb-2">Marketer Name</label>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-inner">
              <BsBuilding className="mr-2 text-gray-500" />
              <span>{business}</span>
              <AiOutlineDown className="ml-2 text-gray-500" />
            </div>
          </div>

          {/* Generate Button */}
          <div className="w-full flex justify-end md:w-1/3">
            <a href=''>
              <button className="bg-[#5546A0] text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-500">
                Generate
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <div className="mb-6">
          {/* Add your icon component or image here */}
          <img src="/empty-image.svg" alt="" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
        <p className="text-lg text-gray-700">
          Select a <span className="text-purple-600 cursor-pointer">business</span> to view history.
        </p>
      </div>   
    </div>
  );
};

export default BusinessHistory;


