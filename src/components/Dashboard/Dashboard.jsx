import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ClearDashboard = () => {
  const data = {
    labels: ['Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9', 'Jul 10', 'Jul 11'],
    datasets: [
      {
        label: 'Business count',
        data: [3, 4, 8, 5, 12, 18, 25],
        borderColor: '#5546A0',
        backgroundColor: 'rgba(85, 70, 160, 0.5)',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#5546A0',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: { stepSize: 5 },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 w-full">
      <main className="flex-1 p-6 lg:px-10 overflow-y-auto w-full">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-full">
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <p className="text-black font-bold text-lg lg:text-2xl">Appointment Booked</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">30</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <p className="text-black font-bold text-lg lg:text-2xl">New Businesses Registered</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">2</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <p className="text-black font-bold text-lg lg:text-2xl">Total Businesses Registered</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">15</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
        </section>

        {/* Subscription and Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Table */}
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <h3 className="text-xl lg:text-2xl text-black font-bold mb-4">Close to subscription payment</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-3 px-4">Business Name</th>
                    <th className="px-4">Country</th>
                    <th className="px-4">Call Details</th>
                    <th className="px-4">Remaining Days</th>
                  </tr>
                </thead>
                <tbody>
                  {['Emirates', 'Bahrain', 'Kuwait', 'Emirates'].map((country, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                      <td className="py-3 px-4">Beauty Minds Salon</td>
                      <td className="px-4">{country}</td>
                      <td className="px-4">+971325841253</td>
                      <td className="px-4">{[25, 10, 16, 8][index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <h3 className="mb-4 text-xl lg:text-2xl text-black font-bold">Close to subscription payment</h3>
            <div className="h-52 w-full bg-white rounded-lg">
              <Line data={data} options={options} />
            </div>
          </div>
        </section>

        {/* Top Businesses Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full px-2 lg:px-4">
          <div className="bg-pink-100 p-6 rounded-lg shadow w-full">
            <h4 className="text-lg font-semibold text-pink-600">#1 Business Minds Salon</h4>
            <p>Employee: 10</p>
            <p>Customer: 50</p>
            <p>Book Per Month: 3</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow w-full">
            <h4 className="text-lg font-semibold text-yellow-600">#2 Business Minds Salon</h4>
            <p>Employee: 10</p>
            <p>Customer: 50</p>
            <p>Book Per Month: 3</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow w-full">
            <h4 className="text-lg font-semibold text-green-600">#3 Business Minds Salon</h4>
            <p>Employee: 10</p>
            <p>Customer: 50</p>
            <p>Book Per Month: 3</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClearDashboard;
