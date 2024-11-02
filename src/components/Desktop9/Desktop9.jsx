import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiChevronDown } from 'react-icons/fi';

const Desktop9Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tagsList = [
    'Haircut & Styling', 'Facials & Skin Care', 'Lashes & Eyebrows', 'Massages',
    'Waxing & Sugaring', 'Injectables & Fillers', 'Tattoos & Piercings', 'Makeup',
    'Barbering', 'Hair Extensions', 'Other'
  ];

  const handleTagChange = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-6 sm:mr-10 md:mr-40">
        <h2 className="text-xl font-semibold mb-6">New Business</h2>
        <hr className="mb-6" />

        {/* Personal Information */}
        <section className="mb-8 flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <h3 className="font-medium text-lg mb-4">Personal Information</h3>
          </div>
          <div className="sm:w-2/3">
            <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:ml-8">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" placeholder="First Name" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" placeholder="Last Name" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="Phone Number" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Gender</label>
                <select className="p-3 border border-gray-300 bg-gray-50 rounded-lg">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Unisex</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Username</label>
                <input type="text" placeholder="Username" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col relative">
                <label className="font-medium text-gray-700 mb-1">Password</label>
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
                <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 mb-8" />

        {/* Business Information */}
        <section className="mb-8 flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <h3 className="font-medium text-lg mb-4">Business Information</h3>
          </div>
          <div className="sm:w-2/3">
            <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:ml-8">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Business Name</label>
                <input type="text" placeholder="Business Name" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Tags</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="p-3 w-full border border-gray-300 bg-gray-50 rounded-lg text-left flex items-center justify-between"
                  >
                    {selectedTags.length > 0 ? selectedTags.join(', ') : 'Select tags'}
                    <FiChevronDown className="ml-2" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {tagsList.map((tag) => (
                        <div key={tag} className="flex items-center p-2 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagChange(tag)}
                            className="mr-2"
                          />
                          <label>{tag}</label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">VAT No.</label>
                <input type="text" placeholder="VAT No." className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 mb-8" />

        {/* Business Address */}
        <section className="mb-8 flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <h3 className="font-medium text-lg mb-4">Business Address</h3>
          </div>
          <div className="sm:w-2/3">
            <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:ml-8">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Country</label>
                <input type="text" placeholder="Country" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">State</label>
                <input type="text" placeholder="State" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">City</label>
                <input type="text" placeholder="City" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Address</label>
                <input type="text" placeholder="Address" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Zip Code</label>
                <input type="text" placeholder="Zip Code" className="p-3 border border-gray-300 bg-gray-50 rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="mb-8">
          <iframe className="w-full h-64 border border-gray-300 rounded-lg" src="https://maps.google.com/maps?q=San Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen loading="lazy"></iframe>
        </section>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg">Cancel</button>
          <button className="px-6 py-2 bg-[#5546A0] text-white rounded-lg">Change</button>
        </div>
      </div>
    </div>
  );
};

export default Desktop9Form;

