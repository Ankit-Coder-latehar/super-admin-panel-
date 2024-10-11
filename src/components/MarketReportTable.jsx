import React from "react";

const Dashboard = () => {
  return (
  
      <div className="w-full max-w-5xl p-4 bg-gray-100 rounded-md shadow-md ">
        
        {/* Form Section */}
        <div className="mb-6 mt-20px">
          <div className="flex justify-between items-end mb-6">
            {/* Date Range Input */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium">Date Range</label>
                <input
                  type="date"
                  className="mt-1 border border-gray-300 rounded-md p-2"
                  defaultValue="2024-07-11"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium">Marketer Name</label>
                <select className="mt-1 border border-gray-300 rounded-md p-2">
                  <option>Select Marketer</option>
                  {/* Additional options can be added here */}
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md">
              Generate
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mt-[-400]">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#5546A0] text-white">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4"></th> {/* Empty column for optional actions */}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-4">Karimian Delghan</td>
                <td className="p-4">nantsiem2024@gmail.com</td>
                <td className="p-4">+9799999999</td>
                <td className="p-4">...</td> {/* Optional action button */}
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4">Karimian Delghan</td>
                <td className="p-4">nantsiem2024@gmail.com</td>
                <td className="p-4">+9799999999</td>
                <td className="p-4">...</td> {/* Optional action button */}
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4">Karimian Delghan</td>
                <td className="p-4">nantsiem2024@gmail.com</td>
                <td className="p-4">+9799999999</td>
                <td className="p-4">...</td> {/* Optional action button */}
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4">Karimian Delghan</td>
                <td className="p-4">nantsiem2024@gmail.com</td>
                <td className="p-4">+9799999999</td>
                <td className="p-4">...</td> {/* Optional action button */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default Dashboard;




