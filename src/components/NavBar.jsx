import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import logotext2 from "../pictures/logotext2.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <nav className="top-0 z-50 py-3 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img className="h-16 w-f mr-2" src={logotext2} alt="ama logo" />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-gray-700 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                
                {item.label === "About" ? (
                  <div className="relative">
                    <button
                      onClick={toggleAboutDropdown}
                      className="hover:text-amaRed duration-500 flex items-center focus:outline-none"
                    >
                      {item.label}
                      <svg
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {aboutDropdownOpen && (
                      <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white/90 ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="https://www.ama.edu.ph/about-ama-university-and-colleges/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            About AMA
                          </a>
                          <a
                            href="https://www.ama.edu.ph/vision-and-mission-ama-university-and-colleges/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Vision and Mission
                          </a>
                          <a
                            href="https://www.ama.edu.ph/message-from-the-chairman-vice-chairman/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Message from the Chairman & Vice Chairman
                          </a>
                          <a
                            href="https://www.ama.edu.ph/ama-hymn/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            AMA Hymn
                          </a>

                          <a
                            href="http://news.amaes.edu.ph/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            News
                          </a>
                          <a
                            href="https://www.ama.edu.ph/industry-partners/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Industry Linkages
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <
                    Link to={item.href}
                    className="hover:text-amaRed duration-500"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-red-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="my-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-white">
                  {item.label === "About" ? (
                    <div>
                      <button
                        onClick={toggleAboutDropdown}
                        className="text-white hover:text-amaRed duration-500 focus:outline-none"
                      >
                        {item.label}
                      </button>
                      {aboutDropdownOpen && (
                        <div className="mt-2">
                          <a
                            href="https://www.ama.edu.ph/about-ama-university-and-colleges/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            About AMA
                          </a>
                          <a
                            href="https://www.ama.edu.ph/vision-and-mission-ama-university-and-colleges/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            Vision and Mission
                          </a>
                          <a
                            href="https://www.ama.edu.ph/message-from-the-chairman-vice-chairman/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            Message from the Chairman & Vice Chairman
                          </a>
                          <a
                            href="https://www.ama.edu.ph/ama-hymn/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            AMA Hymn
                          </a>

                          <a
                            href="http://news.amaes.edu.ph/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            News
                          </a>
                          <a
                            href="https://www.ama.edu.ph/industry-partners/"
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                          >
                            Industry Linkages
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <link to={item.href} className="text-white">
                      {item.label}
                    </link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://discipulusv2.amasystem.net/StudentPortal/"
                className="py-2 px-3 border rounded-md text-white"
              >
                Student Log in
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
