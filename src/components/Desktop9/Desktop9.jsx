import React, { useState } from 'react';

const Desktop9Form = () => {
  const [selectedTags, setSelectedTags] = useState([]);
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
    const { value, checked } = event.target;

    if (value === 'all') {
      if (checked) {
        setSelectedTags(tagsList);
      } else {
        setSelectedTags([]);
      }
    } else {
      if (checked) {
        setSelectedTags([...selectedTags, value]);
      } else {
        setSelectedTags(selectedTags.filter((tag) => tag !== value));
      }
    }
  };

  const isAllSelected = tagsList.length === selectedTags.length;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-6">New Business</h2>

        {/* Personal Information */}
        <section className="mb-8 flex">
          <div className="w-1/3">
          <h3 className="font-medium text-lg mb-4 float-left ">Personal Information</h3></div> {/* Left side gap for alignment */}
          <div className="w-2/3 ">
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col ">
                <label className="font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Gender</label>
                <select className="p-3 border border-gray-300 rounded-lg">
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
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 p-2" />

        {/* Business Information */}
        <section className="mb-8 flex">
          <div className="w-1/3">
          <h3 className="font-medium text-lg mb-4 float-left">Business Information</h3></div> {/* Left side gap for alignment */}
          <div className="w-2/3">
           
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Updated Tags Section with Checkboxes */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Tags</label>
                <div className="grid grid-cols-2 gap-4">
                  {/* All Tags Option */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value="all"
                      checked={isAllSelected}
                      onChange={handleTagChange}
                      className="mr-2"
                    />
                    <label>Select All</label>
                  </div>

                  {/* Individual Tags */}
                  {tagsList.map((tag) => (
                    <div key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        value={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={handleTagChange}
                        className="mr-2"
                      />
                      <label>{tag}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">VAT No.</label>
                <input
                  type="text"
                  placeholder="VAT No."
                  className="p-3 border border-gray-300 rounded-lg"
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
          </div> {/* Left side gap for alignment */}
          <div className="w-2/3">
            <div className="grid grid-cols-1 gap-y-6 ml-20">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="p-3 border border-gray-300 rounded-lg"
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


