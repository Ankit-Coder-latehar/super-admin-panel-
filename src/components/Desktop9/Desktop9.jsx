import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker issue with react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const BusinessForm = () => {
  const [workHours, setWorkHours] = useState({
    monday: { open: true, start: '08:00 AM', end: '11:00 PM' },
    tuesday: { open: true, start: '08:00 AM', end: '11:00 PM' },
    wednesday: { open: true, start: '08:00 AM', end: '11:00 PM' },
    thursday: { open: false, start: '', end: '' },
    friday: { open: false, start: '', end: '' },
    saturday: { open: false, start: '', end: '' },
    sunday: { open: false, start: '', end: '' },
  });

  const handleWorkHoursChange = (day, field, value) => {
    setWorkHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  return (
    <div className="min-h-screen flex justify-center py-8 px-2 sm:px-6 lg:px-8 bg-gray-50 ml-10 sm:ml-0 ">
      <div className="w-full max-w-md sm:max-w-4xl bg-white rounded-lg shadow-md p-4 sm:p-8 transform ml-4 sm:ml-0">
        <h2 className="text-2xl font-semibold mb-6 text-center">New Fake Business</h2>

        {/* Business Information */}
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-4">Business Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <div className="h-full"></div>
            <div className="flex justify-center items-center border-dashed border-2 border-gray-300 rounded-lg p-4">
              <div className="text-center">
                <p className="mb-2 text-gray-500">Drag & Drop file here</p>
                <span className="block text-sm text-gray-500">or</span>
                <button className="px-4 py-2 mt-2 bg-[#5546A0] text-white rounded-lg">
                  Choose file
                </button>
                <p className="text-sm text-gray-400 mt-1">Maximum upload size in MB</p>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="font-medium text-gray-700 mb-1">Business Name</label>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-1">Website</label>
              <input
                type="text"
                placeholder="Website"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value="+971"
                  disabled
                  className="w-16 p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Address */}
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-4">Business Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>
          </div>

          {/* Map */}
          <div className="mt-4">
            <MapContainer center={[37.7749, -122.4194]} zoom={13} className="w-full h-64 border border-gray-300 rounded-lg">
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
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-4">Work Hours</h3>
          {Object.keys(workHours).map((day) => (
            <div key={day} className="flex flex-wrap items-center space-x-4 mb-2">
              <label className="w-1/4 capitalize font-medium text-gray-700">{day}</label>
              <div
                onClick={() => handleWorkHoursChange(day, 'open', !workHours[day].open)}
                className={`relative inline-flex h-6 w-11 cursor-pointer transition-colors ${
                  workHours[day].open ? 'bg-[#5546A0]' : 'bg-gray-300'
                } rounded-full`}
              >
                <span
                  className={`transform transition-transform duration-200 ease-in-out ${
                    workHours[day].open ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 bg-white rounded-full`}
                />
              </div>
              <input
                type="time"
                value={workHours[day].start}
                disabled={!workHours[day].open}
                onChange={(e) => handleWorkHoursChange(day, 'start', e.target.value)}
                className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-32"
              />
              <span>to</span>
              <input
                type="time"
                value={workHours[day].end}
                disabled={!workHours[day].open}
                onChange={(e) => handleWorkHoursChange(day, 'end', e.target.value)}
                className="p-3 border border-gray-300 bg-gray-50 rounded-lg w-32"
              />
            </div>
          ))}
        </section>

        {/* Services */}
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                placeholder="Category"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1">Services</label>
              <input
                type="text"
                placeholder="Services separated with commas"
                className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg"
              />
            </div>
          </div>
          <button className="mt-4 text-[#5546A0] text-sm">+ Add tier</button>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg mb-2 sm:mb-0">
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

export default BusinessForm;




