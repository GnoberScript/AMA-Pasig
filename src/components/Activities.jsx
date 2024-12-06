import { Calendar } from "lucide-react";
import { checklistItems } from "../constants";

const Activities = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="text-center pt-6 sm:pt-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl md:text-6xl">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Activities{" "}
            </span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
            Here's what we have lined up for you. Stay tuned for more updates!
          </p>
        </div>

        {/* Large Screen Design */}
        <div className="hidden sm:flex justify-center pt-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 max-w-7xl w-full">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg border-2 border-blue-600 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-blue-800 mb-4 h-10 w-10 p-1 flex justify-center items-center rounded-full bg-blue-100">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h5>
                  <p className="text-base font-medium text-gray-700 hover:text-blue-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Screen Design */}
        <div className="sm:hidden flex justify-center pt-10 px-4">
          <div className="bg-white rounded-lg shadow-lg border-2 border-blue-600 p-6 max-w-md w-full">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start mb-4 last:mb-0">
                <div className="text-blue-800 mr-4 h-10 w-10 p-1 flex justify-center items-center rounded-full bg-blue-100">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h5>
                  <p className="text-base font-medium text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
