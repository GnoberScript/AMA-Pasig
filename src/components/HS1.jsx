import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero1 from "../pictures/Hero1.png";
import hero2 from "../pictures/Hero2.png";
import hero3 from "../pictures/Hero3.png";
import hero4 from "../pictures/Hero4.png";
import hero5 from "../pictures/Hero5.png";
import hero6 from "../pictures/Hero6.png";
import hero7 from "../pictures/Hero7.png";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const HS1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full m">
      <div className="absolute inset-0 z-0">
        <div className="relative overflow-hidden w-full h-full">
          <div className="absolute inset-0 z-0 bg-black"></div>
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover  transition-transform duration-500 ease-in-out bg-black opacity-40 ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              } brightness-50`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-4 py-8 md:py-28 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center text-white tracking-wide">
          AMA Computer College-Pasig:
          <br />
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text ml-2">
            Redefining the IT World
          </span>
        </h1>
        <p className="mt-10 text-1xl text-center text-white max-w-3xl">
          At AMA Computer College-Pasig, we equip students with cutting-edge
          skills and practical experience to lead in the evolving world of
          technology. Join us in shaping the future of IT.
        </p>
        <div className="flex justify-center my-10">
          <Link
            to="/admission"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white transition-transform transform hover:-translate-y-1 hover:shadow-2xl duration-300"
          >
            Enroll now
          </Link>
          <a
            href="https://discipulusv2.amasystem.net/StudentPortal"
            target="_blank"
            className="py-3 px-4 mx-3 rounded-md text-white transition-transform transform hover:-translate-y-1 border border-white  hover:shadow-2xl hover:border-amaRed hover:bg-amaRed duration-500"
          >
            Student Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default HS1;
