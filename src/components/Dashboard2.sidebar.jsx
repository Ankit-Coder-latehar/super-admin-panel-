import React, { useState } from "react";

const Dashboard2Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-full bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 md:hidden z-20 bg-[#5546A0] text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        <img src="/menu.svg" alt="Menu Icon" className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#5546A0] text-white p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-20 lg:w-24 xl:w-28 2xl:w-32 z-10`}
      >
        <div className="space-y-6 mt-12">
          {/* Close Button for Sidebar on Mobile */}
          <button
            className="absolute top-4 right-4 md:hidden text-white"
            onClick={toggleSidebar}
          >
            <img src="/close.svg" alt="Close Icon" className="w-6 h-6" />
          </button>

          {/* Sidebar Images */}
          <div className="flex flex-col items-center space-y-6">
            <a href="/" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/element-3.svg"
                alt="Dashboard Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="/dashboard2" className="rounded-lg bg-[#111] transition-colors duration-300">
              <img
                src="/personalcard.svg"
                alt="Calendar Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="/branch" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/location.svg"
                alt="Users Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            {/* Add the remaining sidebar items */}
            <a href="/fakebusiness" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/brifecase-cross.svg"
                alt="Business Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="/seoContent" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/send-sqaure-2.svg"
                alt="SEO Content Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/bag-2.svg"
                alt="Bag Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="/admins" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/security-user.svg"
                alt="Admins Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="/result" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/chart.svg"
                alt="Results Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img
                src="/logout.svg"
                alt="Logout Icon"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard2Sidebar;

