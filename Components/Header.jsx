import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import CountrySelector from './CountrySelector'; // Import CountrySelector component
import MenuSvg from '../assets/svg/MenuSvg'; // Ensure MenuSvg is imported

const Header = ({ onCountrySelect }) => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const closeNavigation = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Animation effect for header links on page load
  useEffect(() => {
    setShowLinks(true); // Set showLinks to true after component mounts for the appear effect
  }, []);

  return (
    <div className={`w-full z-50 transition-all duration-300 ease-in-out ${openNavigation ? "bg-white" : "bg-[#ffffff]"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4">
        {/* Logo Section */}
        <Link to="/" className="block w-[250px] h-[100px] xl:mr-8 flex items-center justify-center transform transition-transform hover:scale-110 font-fredoka font-bold">
  <span className="text-[#0E69FF] text-4xl font-bold">aconews</span>
</Link>


        {/* Navigation and Country Selector */}
        <div className="flex items-center ml-auto space-x-10 lg:space-x-20">
          {/* Country Selector for large screens */}
          <div className="hidden lg:block">
            <CountrySelector onSelect={onCountrySelect} />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="lg:hidden px-3 py-2 transition-transform hover:scale-105 z-60" // Increased z-index here
            onClick={toggleNavigation}
            style={{ position: 'relative' }} // Ensure proper positioning
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>

          {/* Navigation Links */}
          <nav
            className={`${openNavigation ? "flex" : "hidden"} lg:flex flex-col lg:flex-row fixed top-0 left-0 right-0 bottom-0 bg-white lg:bg-transparent lg:relative lg:w-auto w-full items-center z-50`} // Increased z-index here
          >
            {/* Close Button for Mobile */}
            <button
  className="lg:hidden absolute top-4 right-4 p-3 transition-transform hover:scale-105 z-60 bg-white rounded-full shadow-lg" // Added bg-white and shadow-lg
  onClick={closeNavigation}
  style={{ position: 'relative' }} // Ensure proper positioning
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>


            <div className={`flex flex-col lg:flex-row items-center justify-center lg:space-x-6 py-10 lg:py-0 transition-opacity duration-500 ease-out ${showLinks ? 'opacity-100' : 'opacity-0'}`}>
              {/* Latest News Link */}
              <Link
                to="/"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${
                  location.pathname === "/LatestNews" ? "text-gray-600" : "text-gray-600"
                }`}
              >
                News
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </Link>

              {/* About Aconews Link */}
              <Link
                to="/about"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${
                  location.pathname === "/about" ? "text-gray-600" : "text-gray-600"
                }`}
              >
                About Aconews
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </Link>

              {/* Country Selector for Mobile */}
              <div className={`lg:hidden ${openNavigation ? 'block' : 'hidden'} px-6 py-3`}>
                <CountrySelector onSelect={onCountrySelect} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
