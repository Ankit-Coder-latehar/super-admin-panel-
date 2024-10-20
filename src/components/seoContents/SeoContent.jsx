import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className=" p-8">
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search by business name..."
            className="w-full py-2 pl-4 pr-10 border rounded-md border-gray-300 focus:outline-none"
          />
          <button className="absolute right-0 top-0 text-white bg-[#5546A0] p-3 rounded-md">
            <FaSearch />
          </button>
        </div>
        {/* New Button */}
        <a href='/desktop18'><button className="flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-md hover:bg-[#5546A0]">
          + New
        </button></a>
      </div>
    </div>
  );
};

export default SearchBar;

