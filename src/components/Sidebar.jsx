import React, { useState } from "react";
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-full bg-gray-100">
      {/* Sidebar Toggle Button for Mobile/Tablet */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-800 p-2 rounded-full text-white"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block lg:w-1/13 bg-[#5546A0] text-white p-4 rounded-full mt-12 ml-4 lg:h-1/2 fixed lg:relative`}
      >
        <div className="space-y-6">
          {/* Sidebar Images */}
          <div className="flex flex-col items-center space-y-6">
            <a href="/" className="rounded-lg bg-[#111] transition-colors duration-300">
              <img src="/element-3.svg" alt="Dashboard Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/personalcard.svg" alt="Calendar Icon" className="w-8 h-8" />
            </a>
            <a href="/branch" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/location.svg" alt="Users Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/brifecase-cross.svg" alt="Chart Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/send-sqaure-2.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/bag-2.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/security-user.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="/marketreport" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/chart.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/logout.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

