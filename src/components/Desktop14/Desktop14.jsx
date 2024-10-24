import React, { useState } from "react";

const Business14Form = () => {
  const [workHours, setWorkHours] = useState({
    monday: { open: true, start: "08:00 AM", end: "11:00 PM" },
    tuesday: { open: true, start: "08:00 AM", end: "11:00 PM" },
    wednesday: { open: true, start: "08:00 AM", end: "11:00 PM" },
    thursday: { open: false, start: "", end: "" },
    friday: { open: false, start: "", end: "" },
    saturday: { open: false, start: "", end: "" },
    sunday: { open: false, start: "", end: "" },
  });

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mr-40 mt-6">
        <h2 className="text-xl font-semibold mb-6">New Fake Business</h2>

        {/* Business Information */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Business Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-6 rounded-lg">
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-[#5546A0] mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v4a4 4 0 004 4h10a4 4 0 004-4V7m-7 4v5m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  <span className="text-gray-500">Drag & Drop file here</span>
                  <button className="mt-2 text-[#5546A0] underline">
                    Choose file
                  </button>
                  <p className="text-xs text-gray-400">Maximum upload size: 1 MB</p>
                </div>
              </label>
            </div>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Business Name"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Website"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex items-center space-x-2">
                <select
                  className="p-3 border border-gray-300 rounded-lg"
                  defaultValue="+971"
                >
                  <option value="+971">+971</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg flex-grow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Address */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Business Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Country"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mt-4">
            <iframe
              className="w-full h-64 border border-gray-300 rounded-lg"
              src="https://maps.google.com/maps?q=San Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Work Hours */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Work Hours</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(workHours).map((day) => (
              <div key={day} className="flex items-center space-x-2">
                <span className="capitalize">{day}</span>
                <input
                  type="checkbox"
                  checked={workHours[day].open}
                  onChange={() =>
                    setWorkHours({
                      ...workHours,
                      [day]: { ...workHours[day], open: !workHours[day].open },
                    })
                  }
                  className="toggle-checkbox"
                />
                {workHours[day].open && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      value={workHours[day].start}
                      onChange={(e) =>
                        setWorkHours({
                          ...workHours,
                          [day]: { ...workHours[day], start: e.target.value },
                        })
                      }
                      className="p-2 border border-gray-300 rounded-lg"
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={workHours[day].end}
                      onChange={(e) =>
                        setWorkHours({
                          ...workHours,
                          [day]: { ...workHours[day], end: e.target.value },
                        })
                      }
                      className="p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Category"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Services (separated with commas)"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="mt-4 text-[#5546A0] underline">Add Tier</button>
        </section>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#5546A0] text-white rounded-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Business14Form;
