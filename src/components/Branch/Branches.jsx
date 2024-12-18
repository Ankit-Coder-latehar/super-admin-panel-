import React from 'react';

const BusinessForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start lg:p-6 h-auto lg:h-screen lg:ml-10 lg:mt-10">
      {/* Business form with larger width for mobile screens */}
      <form className="bg-white shadow-md rounded-md w-full p-4 lg:p-6 space-y-4 mb-6 lg:mb-0 lg:max-w-[40rem] sm:max-w-md lg:ml-10">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Business Name</label>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-2 space-y-2 lg:space-y-0">
            <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-1">
              <option value="" disabled selected>
                Select business
              </option>
              <option value="business1">Business 1</option>
              <option value="business2">Business 2</option>
            </select>
            <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all w-full lg:w-auto">
              Generate
            </button>
          </div>
        </div>
      </form>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center w-full lg:w-auto lg:ml-auto lg:h-full lg:items-left lg:justify-center lg:mr-80">
        <div className="flex items-left justify-left mb-4">
          {/* Add your icon component or image here */}
          <img src="/empty-image.png" alt="No data" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 " />
        </div>
        <p className="text-sm sm:text-md lg:text-lg text-gray-700 text-center">
          Select a <span className="text-purple-600 cursor-pointer">business</span> to view branches.
        </p>
      </div>
    </div>
  );
};

export default BusinessForm;

