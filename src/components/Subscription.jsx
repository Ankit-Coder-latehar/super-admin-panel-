import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineDown } from 'react-icons/ai';

const Subscription = () => {
  const [dateRange, setDateRange] = useState('Select date range');
  const [business, setBusiness] = useState('Select business');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const businesses = [
    'Business A',
    'Business B',
    'Business C',
    'Business D',
  ]; // Sample business options

  const handleBusinessSelect = (selectedBusiness) => {
    setBusiness(selectedBusiness);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-gray-100">
      {/* Header Filters */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Business Name Section */}
          <div className="relative w-full md:w-1/3 mb-6 md:mb-0">
            <label className="block text-gray-700 font-medium mb-2">Business Name</label>
            <div
              className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-inner cursor-pointer justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center">
                <AiOutlineCalendar className="mr-2 text-gray-500" />
                <span>{business}</span>
              </div>
              <AiOutlineDown className="ml-2 text-gray-500" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg">
                {businesses.map((b) => (
                  <div
                    key={b}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleBusinessSelect(b)}
                  >
                    {b}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Generate Button */}
          <div className="w-full md:w-1/3 flex justify-end">
            <button className="bg-[#5546A0] text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-500">
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <div className="mb-6">
          {/* Add your icon component or image here */}
          <img src="/empty-image.png" alt="" />
        </div>
        <p className="text-lg text-gray-700">
          Select a <span className="text-purple-600 cursor-pointer">business</span> to view history.
        </p>
      </div>
    </div>
  );
};

export default Subscription;
