import React from "react";
import "@fontsource/inter"; // Import Inter font

const SeoTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg font-inter">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-pink-500 text-white">
            <th className="px-6 py-3 text-left">Type</th>
            <th className="px-6 py-3 text-left">Link</th>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-right">...</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-6 py-4 text-gray-900">Branch</td>
            <td className="px-6 py-4 text-gray-900">Test</td>
            <td className="px-6 py-4 text-gray-900">Salon</td>
            <td className="px-6 py-4 text-right text-gray-900">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SeoTable;
