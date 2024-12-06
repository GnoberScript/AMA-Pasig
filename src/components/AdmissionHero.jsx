import React from "react";
import logo from "../pictures/logo.png";
import { Link } from "react-router-dom";



const AdmissionHero = () => {


  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 mt-20 w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            
            
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Applications are Open
            </h1>
            <h2 className="mt-3 text-2xl leading-8 font-semibold text-blue-200 sm:text-3xl lg:text-3xl">
              Student Admission to College and Senior High School
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              Get started on your journey with AMA through our admissions
              portal. Senior high school graduates eager to join us can begin
              their application by sharing their personal details here. Redefine
              the IT world with us—join the AMA today!
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <Link to="/admission"
              target="_blank"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white duration-300 hover:bg-amaRed hover:text-white md:py-4 md:text-lg md:px-10"
              >
                Proceed to admissions page
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 hidden sm:block">
            <img
              src={logo}
              alt="Admission Hero"
              className="mx-auto rounded-lg  max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHero;
