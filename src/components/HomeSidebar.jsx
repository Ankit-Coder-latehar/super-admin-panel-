import React from "react";


const HomeSidebar = () => {
  return (
    <div className="flex min-h-full bg-gray-100">
    {/* Sidebar */}
    <aside className="w-1/13 bg-[#5546A0] text-white p-4 h-1/2 rounded-full mt-12 ml-4">
      <div className="space-y-6">
        {/* Sidebar Images */}
        <div className="flex flex-col items-center space-y-6">
          <a href="/" className=" rounded-lg bg-[#111] transition-colors duration-300">
            <img src="/element-3.svg" alt="Dashboard Icon" className="w-8 h-8" />
          </a>
          <a href="#" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/personalcard.svg" alt="Calendar Icon" className="w-8 h-8" />
          </a>
          <a href="/branch" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/location.svg" alt="Users Icon" className="w-8 h-8" />
          </a>
          <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/brifecase-cross.svg" alt="Chart Icon" className="w-8 h-8" />
          </a>
          <a href="#" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/send-sqaure-2.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
          <a href="#" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/bag-2.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
          <a href="#" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/security-user.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
          <a href="/result" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/chart.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
          <a href="#" className=" rounded-lg hover:bg-[#111] transition-colors duration-300">
            <img src="/logout.svg" alt="Logout Icon" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </aside>
    </div>
  )
};


export default HomeSidebar;