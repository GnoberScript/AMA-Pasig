import React from "react";
import { Link } from "react-router-dom";
import secure from "../pictures/secure.png";

const Admission = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 sm:text-5xl lg:text-6xl mt-10 mb-5 lg:mt-20 tracking-wide">
          Admission{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            information
          </span>
        </h2>
        <p className="text-gray-700">
          Ready to enroll? Conveniently and safely process your application
          anytime, anywhere through our online enrollment system.{" "}
        </p>
      </div>

      <div className="mt-10 lg:mt-20 px-4 lg:px-0 max-w-5xl mx-auto space-y-8">
        {/* Admissions for College */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl text-gray-700 font-bold mb-4">
            Admissions for College
          </h3>
          <p className="text-gray-600 mb-4">
            Apply for admission to our college programs and start your journey
            towards a successful career.
          </p>
          <Link
            to="https://www.ama.edu.ph/for-college-programs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Admissions for Graduate School */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Admissions for Graduate School
          </h3>
          <p className="text-gray-600 mb-4">
            Take your education to the next level with our graduate programs and
            advance your career.
          </p>
          <Link
            to="https://www.ama.edu.ph/graduate-masters/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Admissions for Senior High */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Admissions for Senior High
          </h3>
          <p className="text-gray-600 mb-4">
            Prepare for college and explore your interests with our senior high
            school programs.
          </p>
          <Link
            to="https://www.ama.edu.ph/senior-high/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Convenient, Safe, and Secure Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 mt-16 lg:mt-20 rounded-lg mx-auto max-w-5xl mb-5">
        <div className="flex flex-wrap items-center justify-center">
          <div className="hidden md:block md:w-1/2 p-4">
            <img
              src={secure}
              alt="Secure Payment"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Convenient, Safe, and Secure Ways to Pay.
            </h3>
            <p className="text-lg text-white mb-4">
              Now you can pay tuition fee, miscellaneous, and other school fees
              online.
            </p>
            <p className="text-lg text-white">
              Pay via credit or debit card, online banking, and payment partners
              like 7-Eleven, Cebuana, SM Bills payment, and more. Your payment
              will immediately reflect in the school's accounting system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
