// "use client"

// import { useState } from "react";

// export default function UserForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     addressLine1: "",
//     addressLine2: "",
//     cityLocality: "",
//     stateProvince: "",
//     postalCode: "",
//     countryCode: "",
//     addressResidentialIndicator: "no",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // You can send this data to an API endpoint or use it as needed
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4 text-center">User Information Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium mb-1" htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="addressLine1">Address Line 1</label>
//           <input
//             type="text"
//             id="addressLine1"
//             name="addressLine1"
//             placeholder="Enter your address line 1"
//             value={formData.addressLine1}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="addressLine2">Address Line 2</label>
//           <input
//             type="text"
//             id="addressLine2"
//             name="addressLine2"
//             placeholder="Enter your address line 2 (optional)"
//             value={formData.addressLine2}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="cityLocality">City</label>
//           <input
//             type="text"
//             id="cityLocality"
//             name="cityLocality"
//             placeholder="Enter your city"
//             value={formData.cityLocality}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="stateProvince">State/Province</label>
//           <input
//             type="text"
//             id="stateProvince"
//             name="stateProvince"
//             placeholder="Enter your state or province"
//             value={formData.stateProvince}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="postalCode">Postal Code</label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             placeholder="Enter your postal code"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="countryCode">Country Code</label>
//           <input
//             type="text"
//             id="countryCode"
//             name="countryCode"
//             placeholder="Enter your country code (e.g., PK)"
//             value={formData.countryCode}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1" htmlFor="addressResidentialIndicator">
//             Residential Address
//           </label>
//           <select
//             id="addressResidentialIndicator"
//             name="addressResidentialIndicator"
//             value={formData.addressResidentialIndicator}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//             required
//           >
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useRef } from "react";

export default function AddressForm() {
  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getAd1 = useRef<HTMLInputElement>(null);
  const getAd2 = useRef<HTMLInputElement>(null);
  const getCity = useRef<HTMLInputElement>(null);
  const getProvince = useRef<HTMLInputElement>(null);
  const getPostalCode = useRef<HTMLInputElement>(null);
  const getCountry = useRef<HTMLInputElement>(null);
  const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      shipToAddress: {
        name: getName.current?.value || "",
        phone: getPhone.current?.value || "",
        address1: getAd1.current?.value || "",
        address2: getAd2.current?.value || "",
        city: getCity.current?.value || "",
        province: getProvince.current?.value || "",
        postalCode: getPostalCode.current?.value || "",
        country: getCountry.current?.value || "",
        addressResidentialIndicator:
          getAddressResidentialIndicator.current?.value || "no",
      },
      packages: [
        {
          weight: { value: 5, unit: "ounce" },
          dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
        },
      ],
    };

    try {
      const res = await fetch("http://localhost:3000/api/shipengine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Response from API:", data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Address Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            ref={getName}
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            ref={getPhone}
            placeholder="Enter your phone number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Address Line 1 */}
        <div>
          <label
            htmlFor="addressLine1"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            ref={getAd1}
            placeholder="Enter address line 1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <label
            htmlFor="addressLine2"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            ref={getAd2}
            placeholder="Suite 200"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="cityLocality"
            className="block text-sm font-medium text-gray-700"
          >
            City/Locality
          </label>
          <input
            type="text"
            id="cityLocality"
            ref={getCity}
            placeholder="Enter your city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="stateProvince"
            className="block text-sm font-medium text-gray-700"
          >
            State/Province
          </label>
          <input
            type="text"
            id="stateProvince"
            ref={getProvince}
            placeholder="Enter your state or province"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            ref={getPostalCode}
            placeholder="Enter your postal code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="countryCode"
            className="block text-sm font-medium text-gray-700"
          >
            Country Code
          </label>
          <input
            type="text"
            id="countryCode"
            ref={getCountry}
            placeholder="Enter your country code (e.g., PK)"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Address Residential Indicator */}
        <div>
          <label
            htmlFor="addressResidentialIndicator"
            className="block text-sm font-medium text-gray-700"
          >
            Address Residential Indicator
          </label>
          <select
            id="addressResidentialIndicator"
            ref={getAddressResidentialIndicator}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}