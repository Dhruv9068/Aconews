import React, { useState, useEffect } from "react";

const Hero = () => {
  const headings = [
    { h1: "AcoNews", subtext: "Your personalised News Platform" },
    { h1: "Latest News", subtext: "" },
    { h1: "News From all over the world", subtext: "" },
    { h1: "News of your interest", subtext: "" },
  ];

  const [currentHeading, setCurrentHeading] = useState(0);
  const [typing, setTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId;
    const heading = headings[currentHeading].h1;
    const typeText = (text, i) => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        timeoutId = setTimeout(() => typeText(text, i + 1), 100);
      } else {
        setTimeout(() => changeHeading(), 2000);
      }
    };

    setDisplayedText("");
    setTyping(true);
    typeText(heading, 0);

    return () => clearTimeout(timeoutId);
  }, [currentHeading]);

  const changeHeading = () => {
    setTyping(false);
    setCurrentHeading((prev) => (prev + 1) % headings.length);
  };

  return (
    <div
      className="relative w-full h-[700px] flex justify-center items-center font-rubik" // Use globally defined font
    >
      {/* Video Background */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video slightly for better text visibility */}
      <div className="absolute inset-0 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center">
        <h1
          className="text-[60px] font-rubik font-bold text-[#0E69FF] transition-opacity duration-500 ease-in-out"
        >
          {displayedText}
        </h1>
        {headings[currentHeading].subtext && (
          <h3
            className="mt-4 text-[24px] font-rubik text-[#000000]"
          >
            {headings[currentHeading].subtext}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Hero;
