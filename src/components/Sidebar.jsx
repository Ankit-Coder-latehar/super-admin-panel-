import React from "react";


const Sidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-1/13 bg-[#5546A0] text-white p-4 h-1/2 rounded-full mt-12 ml-4">
      <div className="space-y-6">
        {/* Sidebar Images */}
        <div className="flex flex-col items-center space-y-6">
          <div className="p-2 rounded-lg">
            <img src="/element-3.svg" alt="Dashboard Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/personalcard.svg" alt="Calendar Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/location.svg" alt="Users Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/brifecase-cross.svg" alt="Chart Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/send-sqaure-2.svg" alt="Logout Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/bag-2.svg" alt="Logout Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/security-user.svg" alt="Logout Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/chart.svg" alt="Logout Icon" className="w-8 h-8" />
          </div>
          <div className="p-0">
            <img src="/logout.svg" alt="Logout Icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </aside>
    </div>
  )
};


export default Sidebar;
