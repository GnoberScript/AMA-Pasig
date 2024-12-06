import news from "../pictures/news.png";

const HS3 = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <a
              href="https://www.ama.edu.ph/about-ama-university-and-colleges/#reputation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4 transition-colors duration-300 hover:text-red-600">
                OUR REPUTATION
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                ISO 9001:2008 Certified for all programs; Recognized as Center
                of Development in Information Technology by CHED…
              </p>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <a
              href="https://www.ama.edu.ph/vision-and-mission-ama-university-and-colleges/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4 transition-colors duration-300 hover:text-red-600">
                VISION AND MISSION
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                AMA will be the leader and dominant provider of relevant
                globally recognized information technology-based education and
                related services in the global market…
              </p>
            </a>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://news.amaes.edu.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                VISIT AMA NEWS
              </p>
              <img
                src={news}
                className="mx-auto transition-transform transform hover:-translate-y-1"
                alt="ama news"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HS3;
