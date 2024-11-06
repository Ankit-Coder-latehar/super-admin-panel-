import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Dashboard2Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-5/7 w-1/11 bg-[#5546A0] text-white p-4 z-30 rounded-full mt-10 ml-2">
        <div className="flex flex-col items-center space-y-6 mt-12">
          <a href="/" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/element-3.svg" alt="Dashboard Icon" className="w-8 h-8" />
          </a>
          <a href="/dashboard2" className="rounded-lg bg-[#111] transition duration-300 p-2">
            <img src="/personalcard.svg" alt="Calendar Icon" className="w-8 h-8" />
          </a>
          <a href="/branch" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/location.svg" alt="Users Icon" className="w-8 h-8" />
          </a>
          <a href="/fakebusiness" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/brifecase-cross.svg" alt="Chart Icon" className="w-8 h-8" />
          </a>
          <a href="/seoContent" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/send-sqaure-2.svg" alt="SEO Icon" className="w-8 h-8" />
          </a>
          <a href="/marketer" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/bag-2.svg" alt="Marketer Icon" className="w-8 h-8" />
          </a>
          <a href="/admins" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/security-user.svg" alt="Admin Icon" className="w-8 h-8" />
          </a>
          <a href="/result" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/chart.svg" alt="Chart Icon" className="w-8 h-8" />
          </a>
          <a href="#" className="rounded-lg hover:bg-[#111] transition duration-300 p-2">
            <img src="/logout.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        {/* Menu Icon */}
        <button
          className="fixed top-4 right-4 z-50 bg-gray-100 text-black p-2 rounded-full"
          onClick={toggleMenu}
        >
          <HiMenuAlt3 size={24} />
        </button>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-[#5546A0] text-white p-4 transition-transform duration-300 z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white">
              <HiX size={24} />
            </button>
          </div>
          <nav className="mt-10 space-y-6">
            <a href="/" className="flex items-center space-x-2">
              <img src="/element-3.svg" alt="Dashboard Icon" className="w-6 h-6" />
              <span>Dashboard</span>
            </a>
            <a href="/dashboard2" className="flex items-center space-x-2">
              <img src="/personalcard.svg" alt="Calendar Icon" className="w-6 h-6" />
              <span>Calendar</span>
            </a>
            <a href="/branch" className="flex items-center space-x-2">
              <img src="/location.svg" alt="Branch Icon" className="w-6 h-6" />
              <span>Branches</span>
            </a>
            <a href="/fakebusiness" className="flex items-center space-x-2">
              <img src="/brifecase-cross.svg" alt="Business Icon" className="w-6 h-6" />
              <span>Businesses</span>
            </a>
            <a href="/seoContent" className="flex items-center space-x-2">
              <img src="/send-sqaure-2.svg" alt="SEO Icon" className="w-6 h-6" />
              <span>SEO Content</span>
            </a>
            <a href="/marketer" className="flex items-center space-x-2">
              <img src="/bag-2.svg" alt="Marketer Icon" className="w-6 h-6" />
              <span>Marketer</span>
            </a>
            <a href="/admins" className="flex items-center space-x-2">
              <img src="/security-user.svg" alt="Admin Icon" className="w-6 h-6" />
              <span>Admins</span>
            </a>
            <a href="/result" className="flex items-center space-x-2">
              <img src="/chart.svg" alt="Result Icon" className="w-6 h-6" />
              <span>Results</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src="/logout.svg" alt="Logout Icon" className="w-6 h-6" />
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2Sidebar;
