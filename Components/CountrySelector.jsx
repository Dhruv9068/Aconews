import React, { useState } from 'react';

const CountrySelector = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedCountry}
        onChange={handleSelect}
        className="appearance-none block w-full bg-[#0e69ff] text-white text-lg font-fredoka px-5 py-3 pr-12 rounded-md cursor-pointer shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring focus:ring-blue-500"
      >
        <option value="Select Country" disabled>
          Select Country
        </option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="India">India</option>
        {/* Add more options as needed */}
      </select>

      {/* Add some animation effect (e.g., an arrow down icon with animation) */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-white transition-transform duration-300 ease-in-out transform rotate-0 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CountrySelector;
