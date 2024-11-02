import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        {/* Search Bar */}
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search by business name..."
            className="w-full py-2 pl-4 pr-10 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-[#5546A0] transition duration-150"
          />
          <button className="absolute right-0 top-0 text-white bg-[#5546A0] p-3 rounded-md hover:bg-[#4536A0] transition duration-150">
            <FaSearch />
          </button>
        </div>
        {/* New Button */}
        <a href='/desktop18'>
          <button className="w-full sm:w-auto flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-md hover:bg-[#4536A0] transition duration-150">
            + New
          </button>
        </a>
      </div>
    </div>
  );
};

export default SearchBar;

