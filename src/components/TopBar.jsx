import { Facebook, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-amaRed py-1">
      <div className="container mx-auto flex justify-between items-center px-4 text-xs">
        <div className="text-white">
          <span className="mr-4">Email: info@example.com</span>
          <span className="mr-4">Contact: +1 (555) 123-4567</span>
        </div>
        <div className="text-white">
          <a
            href="#"
            className="mr-4 hover:text-gray-300 transition-colors duration-300"
          >
            icon
          </a>

          <a
            href="#"
            className="mr-4 hover:text-gray-300 transition-colors duration-300"
          >
            icon
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            icon
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
