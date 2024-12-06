import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logotext2 from "../pictures/logotext2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left">
            <img className="h-12 w-auto mb-4" src={logotext2} alt="ama logo" />
            <p className="text-gray-400 mb-4">
              Become a member of AMA Education System! AMA University now offers
              full online education, earn your degree online - anywhere you are
              in the world.
            </p>
            <p className="text-gray-300">
              2nd Floor Chipeco Building, Ortigas Center, Pasig, Metro Manila
            </p>
            <p className="text-gray-300">Hotline:</p>
            <p className="text-gray-300">
              Email: <span className="text-blue-400">gmail.com /</span>
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Admissions
            </h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
