import React from "react";
import onlinepayment from "../pictures/onlinepayment.png";

const HS4 = () => {
  return (
    <div className="bg-gray-100 py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-3xl">
              Online Student Enrollment System and Payment System are now
              available
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              GREAT NEWS! You may now pay your Tuition and Other Fees Online.
              Convenient, Safe, Secure and More Ways to Pay in your area. Pay
              via credit card, online banking, 7-Eleven, Cebuana, SM Bills
              payment and many more.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2 hidden sm:block">
            <div className="flex items-center justify-center">
              <img
                src={onlinepayment}
                alt="Online Payment"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HS4;
