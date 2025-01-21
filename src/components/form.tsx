"use client"

import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    cityLocality: "",
    stateProvince: "",
    postalCode: "",
    countryCode: "",
    addressResidentialIndicator: "no",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can send this data to an API endpoint or use it as needed
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">User Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            placeholder="Enter your address line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            placeholder="Enter your address line 2 (optional)"
            value={formData.addressLine2}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="cityLocality">City</label>
          <input
            type="text"
            id="cityLocality"
            name="cityLocality"
            placeholder="Enter your city"
            value={formData.cityLocality}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="stateProvince">State/Province</label>
          <input
            type="text"
            id="stateProvince"
            name="stateProvince"
            placeholder="Enter your state or province"
            value={formData.stateProvince}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Enter your postal code"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="countryCode">Country Code</label>
          <input
            type="text"
            id="countryCode"
            name="countryCode"
            placeholder="Enter your country code (e.g., PK)"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="addressResidentialIndicator">
            Residential Address
          </label>
          <select
            id="addressResidentialIndicator"
            name="addressResidentialIndicator"
            value={formData.addressResidentialIndicator}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
