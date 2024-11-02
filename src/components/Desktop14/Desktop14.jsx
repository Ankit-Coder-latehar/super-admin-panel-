import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker issue with react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

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
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl md:max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">New Fake Business</h2>

        {/* Business Information */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Business Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <p className="text-xs text-gray-400">
                    Maximum upload size: 1 MB
                  </p>
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
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <select
                  className="p-3 border border-gray-300 rounded-lg w-full md:w-auto"
                  defaultValue="+971"
                >
                  <option value="+971">+971</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg w-full md:flex-grow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Address */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Business Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <MapContainer
              center={[37.7749, -122.4194]}
              zoom={13}
              className="w-full h-64 border border-gray-300 rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[37.7749, -122.4194]}>
                <Popup>San Francisco</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Work Hours */}
        <section className="mb-8">
          <h3 className="font-medium text-lg mb-4">Work Hours</h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.keys(workHours).map((day) => (
              <div key={day} className="flex items-center space-x-4">
                <span className="capitalize w-20">{day}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={workHours[day].open}
                    onChange={() =>
                      setWorkHours({
                        ...workHours,
                        [day]: { ...workHours[day], open: !workHours[day].open },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5546A0] dark:peer-focus:ring-[#5546A0] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5546A0]"></div>
                  <span className="ml-3 text-gray-900">{workHours[day].open ? "Open" : "Close"}</span>
                </label>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
