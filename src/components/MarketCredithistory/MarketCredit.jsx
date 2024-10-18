import React from 'react';

const MarketCredit = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start p-4 lg:p-6 h-auto lg:h-screen lg:mr-20">
      {/* Business form with larger width on desktop */}
      <form className="bg-white shadow-md rounded-md w-full max-w-xl p-4 lg:p-6 space-y-4 mb-6 lg:mb-0">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Business Name</label>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-2 space-y-4 lg:space-y-0">
            <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-1">
              <option value="" disabled selected>Select business</option>
              <option value="business1">Business 1</option>
              <option value="business2">Business 2</option>
            </select>
            <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all">
              Generate
            </button>
          </div>
        </div>
      </form>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center w-full lg:w-auto mt-6 lg:mt-0 lg:ml-10">
        <div className="mb-6">
          {/* Add your icon component or image here */}
          <img src="/empty-image.png" alt="No data" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
        </div>
        <p className="text-sm sm:text-md lg:text-lg text-gray-700">
          Select a <span className="text-purple-600 cursor-pointer">business</span> to view branches.
        </p>
      </div>
    </div>
  );
};

export default MarketCredit;
