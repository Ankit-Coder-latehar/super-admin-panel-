import React from 'react';

const SubscriptionInvoiceForm = () => {
  return (
    <div className=" flex items-center justify-left bg-gray-100  mt-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/5 ml-20">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">New Subscription Invoice</h2>
        
        {/* Message Credit Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message Credit</label>
          <input 
            type="text" 
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
            placeholder="" 
          />
        </div>
        
        {/* Invoice Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Date</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="mm/dd/yy" 
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1H2.5A1.5 1.5 0 001 6.5v9A1.5 1.5 0 002.5 17h15a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0017.5 5H16V4a2 2 0 00-2-2H6zm8 4V4H6v2h8zm-3 3a1 1 0 00-2 0v3a1 1 0 002 0V9z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        {/* Due Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="mm/dd/yy" 
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1H2.5A1.5 1.5 0 001 6.5v9A1.5 1.5 0 002.5 17h15a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0017.5 5H16V4a2 2 0 00-2-2H6zm8 4V4H6v2h8zm-3 3a1 1 0 00-2 0v3a1 1 0 002 0V9z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            rows="3" 
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder=""
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="border border-[#5546A0] text-[#5546A0] px-4 py-2 rounded-md hover:bg-purple-50">
            Cancel
          </button>
          <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInvoiceForm;
