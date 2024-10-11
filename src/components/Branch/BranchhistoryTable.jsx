import React from 'react';

const BranchTableHistory = () => {
  return (
    <div className="flex justify-center p-6 bg-gray-100 mr-60">
      <div className="w-full max-w-5xl bg-white rounded-md shadow-md overflow-hidden">
        
        {/* Table Header */}
        <div className="bg-pink-500 text-white text-sm font-semibold rounded-t-md">
          <div className="flex items-center py-3 px-6 space-x-4">
            <span className="w-1/5">Branch Name</span>
            <span className="w-1/5">Services Count</span>
            <span className="w-1/5">Employees Count</span>
            <span className="w-1/5">Appointment Count</span>
            <span className="w-1/5">Phone Number</span>
            <span className="w-1/6">Active</span>
            <span className="w-1/12">Actions</span>
          </div>
        </div>

        {/* Table Body */}
        <div className="text-gray-700 text-sm font-medium">
          <div className="flex items-center border-t border-gray-200 py-4 px-6 space-x-4">
            <span className="w-1/5">Branch 1</span>
            <span className="w-1/5">46</span>
            <span className="w-1/5">39</span>
            <span className="w-1/5">392</span>
            <span className="w-1/5">+9719999999</span>
            <span className="w-1/6">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" defaultChecked />
            </span>
            <span className="w-1/12">
              <button className="text-gray-500 hover:text-gray-700">
                {/* Icon for actions (three dots) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v.01M12 12v.01M12 18v.01" />
                </svg>
              </button>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BranchTableHistory;

