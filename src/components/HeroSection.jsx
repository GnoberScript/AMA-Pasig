import Activities from "./Activities";
import AdmissionHero from "./AdmissionHero";
import HS2 from "./HS2";
import HS3 from "./HS3";

import HS1 from "./HS1";
import HS4 from "./HS4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
      <HS1 />
      <HS2 />
      <HS3 />

      <div className=" mt-5 w-full">
        <Activities />
      </div>
      <AdmissionHero />
      <HS4 />
    </div>
  );
};

export default HeroSection;
