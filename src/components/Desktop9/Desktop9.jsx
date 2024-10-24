import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Desktop9Form = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [selectedTag, setSelectedTag] = useState(''); // State to manage selected tag

  const tagsList = [
    'Haircut & Styling',
    'Facials & Skin Care',
    'Lashes & Eyebrows',
    'Massages',
    'Waxing & Sugaring',
    'Injectables & Fillers',
    'Tattoos & Piercings',
    'Makeup',
    'Barbering',
    'Hair Extensions',
    'Other',
  ];

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value); // Set the selected tag
  };

  return (
    <div className="min-h-screen items-left justify-start flex">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mr-40 mt-6">
        <h2 className="text-xl font-semibold mb-6">New Business</h2>
        <hr className="p-2" />

        {/* Personal Information */}
        <section className="mb-8 flex">
          <div className="w-1/3">
            <h3 className="font-medium text-lg mb-4 float-left">Personal Information</h3>
          </div>
          <div className="w-2/3">
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Gender</label>
                <select className="p-3 border border-gray-300 bg-gray-50 rounded-lg">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-Binary</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col relative">
                <label className="font-medium text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
                {/* Eye icon to toggle visibility */}
                <span
                  className="absolute right-3 top-11 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 p-2" />

        {/* Business Information */}
        <section className="mb-8 flex">
          <div className="w-1/3">
            <h3 className="font-medium text-lg mb-4 float-left">Business Information</h3>
          </div>
          <div className="w-2/3">
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              {/* Updated Tags Section with Dropdown */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Tags</label>
                <select
                  value={selectedTag}
                  onChange={handleTagChange}
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                >
                  <option value="">Select a tag</option>
                  {tagsList.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">VAT No.</label>
                <input
                  type="text"
                  placeholder="VAT No."
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 p-2" />

        {/* Business Address */}
        <section className="mb-8 flex">
          <div className="w-1/3">
            <h3 className="font-medium text-lg mb-4 float-left">Business Address</h3>
          </div>
          <div className="w-2/3">
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700  mb-1">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700  mb-1">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700  mb-1">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700  mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700  mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="mb-8">
          <iframe
            className="w-full h-64 border border-gray-300 rounded-lg"
            src="https://maps.google.com/maps?q=San Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#5546A0] text-white rounded-lg">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop9Form;





