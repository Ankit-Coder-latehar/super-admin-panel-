import React from 'react';
import Sidebar from '../components/Sidebar';
import ResultTable from '../components/Result/ResultTable';

const Result = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on small screens, visible on larger screens */}
      <div className=" lg:block">
        <Sidebar />
      </div>

      {/* Result Table Container */}
      <div className="flex-grow p-4 lg:p-8">
        <div className="bg-white  p-4 lg:p-8 mx-auto max-w-full lg:max-w-7xl">
          <ResultTable />
        </div>
      </div>
    </div>
  );
}

export default Result;
