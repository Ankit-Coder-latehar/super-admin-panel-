import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
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
    maintainAspectRatio: false, // Adjust this to allow custom height/width
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 5,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

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

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-purple-800 mb-6">Dashboard</h1>

        {/* Stats Section */}
        <section className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold mt-[-10px] text-2xl">Appointment Booked</p>
            <h2 className="text-4xl text-pink-600">30</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold mt-[-10px] text-2xl">New Businesses Registered</p>
            <h2 className="text-4xl text-pink-600">2</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold mt-[-10px] text-2xl">Total Businesses Registered</p>
            <h2 className="text-4xl text-pink-600">15</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
        </section>

        {/* Subscription and Charts Section */}
        <section className="grid grid-cols-2 gap-6">
          {/* Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl text-black font-bold mb-4">Close to subscription payment</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2">Business Name</th>
                  <th>Country</th>
                  <th>Call Details</th>
                  <th>Remaining Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Beauty Minds Salon</td>
                  <td>Emirates</td>
                  <td>+971325841253</td>
                  <td>25</td>
                </tr>
                <tr className='bg-gray-100'>
                  <td className="py-2">Beauty Minds Salon</td>
                  <td>Bahrain</td>
                  <td>+971325841253</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td className="py-2">Beauty Minds Salon</td>
                  <td>Kuwait</td>
                  <td>+971325841253</td>
                  <td>16</td>
                </tr>
                <tr className='bg-gray-100'>
                  <td className="py-2">Beauty Minds Salon</td>
                  <td>Emirates</td>
                  <td>+971325841253</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="  mb-4 text-2xl text-black font-bold">Close to subscription payment</h3>
            <div className="h-52 w-full bg-white rounded-lg">
              <Line data={data} options={options} />
            </div>
          </div>
        </section>

        {/* Top Businesses Section */}
        
        <section className="grid grid-cols-3 gap-6 mt-6 bg-white rounded-md p-4">
          <div className="bg-pink-100 p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-pink-600">#1 Business Minds Salon</h4>
            <p>Employee: 10</p>
            <p>Customer: 50</p>
            <p>Book Per Month: 3</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-yellow-600">#2 Business Minds Salon</h4>
            <p>Employee: 10</p>
            <p>Customer: 50</p>
            <p>Book Per Month: 3</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
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

export default Dashboard;
