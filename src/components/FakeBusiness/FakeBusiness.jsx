import React from "react";
import { FaSearch } from "react-icons/fa";

const FakeBusiness = () => {
  return (
    <div className="p-4 lg:p-8 lg:ml-10 ">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0 lg:ml-4">
        {/* Search Bar */}
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search by business name..."
            className="w-full py-2 pl-4 pr-10 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5546A0] transition-all"
          />
          <button className="absolute right-0 top-0 text-white bg-[#5546A0] p-2 lg:p-3 rounded-md hover:bg-indigo-600 transition-all">
            <FaSearch />
          </button>
        </div>

        {/* New Button */}
        <a href='/desktop14'>
          <button className="w-full lg:w-auto flex justify-center items-center bg-[#5546A0] text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-all">
            + New
          </button>
        </a>
      </div>
    </div>
  );
};

export default FakeBusiness;
