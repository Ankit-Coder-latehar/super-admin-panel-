import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Menu and Close icons

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/12 bg-[#5546A0] text-white p-4 h-auto lg:h-screen lg:rounded-full lg:mt-12 lg:ml-4">
        <div className="space-y-6">
          {/* Sidebar Images */}
          <div className="flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-6">
            <a href="/" className="rounded-lg bg-[#111] transition-colors duration-300">
              <img src="/element-3.svg" alt="Dashboard Icon" className="w-8 h-8" />
            </a>
            <a href="/dashboard2" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/personalcard.svg" alt="Calendar Icon" className="w-8 h-8" />
            </a>
            <a href="/branch" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/location.svg" alt="Users Icon" className="w-8 h-8" />
            </a>
            <a href="/fakebusiness" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/brifecase-cross.svg" alt="Chart Icon" className="w-8 h-8" />
            </a>
            <a href="/seoContent" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/send-sqaure-2.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/bag-2.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="/admins" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/security-user.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="/result" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/chart.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
            <a href="#" className="rounded-lg hover:bg-[#111] transition-colors duration-300">
              <img src="/logout.svg" alt="Logout Icon" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-purple-800 mb-6">Dashboard</h1>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold text-lg lg:text-2xl">Appointment Booked</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">30</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold text-lg lg:text-2xl">New Businesses Registered</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">2</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-black font-bold text-lg lg:text-2xl">Total Businesses Registered</p>
            <h2 className="text-3xl lg:text-4xl text-pink-600">15</h2>
            <p className="text-sm">(In 1 month)</p>
          </div>
        </section>

        {/* Subscription and Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl lg:text-2xl text-black font-bold mb-4">Close to subscription payment</h3>
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
                <tr className="bg-gray-100">
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
                <tr className="bg-gray-100">
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
            <h3 className="mb-4 text-xl lg:text-2xl text-black font-bold">Close to subscription payment</h3>
            <div className="h-52 w-full bg-white rounded-lg">
              <Line data={data} options={options} />
            </div>
          </div>
        </section>

        {/* Top Businesses Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 bg-white rounded-md p-4">
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

      {/* Menu Icon for Small Screens */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button onClick={toggleMenu} className="p-2 bg-purple-800 text-white rounded-full focus:outline-none">
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Responsive Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-[#5546A0] text-white p-4 z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
          <a href="/admins" className="flex items-center space-x-2">
            <img src="/security-user.svg" alt="Admins Icon" className="w-6 h-6" />
            <span>Admins</span>
          </a>
          <a href="/result" className="flex items-center space-x-2">
            <img src="/chart.svg" alt="Result Icon" className="w-6 h-6" />
            <span>Results</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;


