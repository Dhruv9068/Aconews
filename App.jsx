import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  const [country, setCountry] = useState('us'); // Default country

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <>
      <Header onCountrySelect={handleCountrySelect} />
      
      <Routes>
        <Route path="/" element={<LatestNews country={country} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
