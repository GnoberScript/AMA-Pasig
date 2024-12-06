import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have a question or need assistance? Get in touch with us, and we'll
            be happy to help.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-blue-500 mr-4"></i>
                <h4 className="text-lg font-bold text-gray-700">Address</h4>
              </div>
              <p className="text-gray-600">
                2nd Floor Chipeco Building, Ortigas Center, Pasig, Metro Manila
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-phone-alt text-blue-500 mr-4"></i>
                <h4 className="text-lg font-bold text-gray-700">Phone</h4>
              </div>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-blue-500 mr-4"></i>
                <h4 className="text-lg font-bold text-gray-700">Email</h4>
              </div>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
