// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Activities from "./components/Activities";
// import Admission from "./components/Admission";
// import HeroSection from "./components/HeroSection";
// import NavBar from "./components/NavBar";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import HS2 from "./components/HS2";
// import HS3 from "./components/HS3";

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="max-w-10xl mx-auto pt-20">
//         <HeroSection />
//         <HS2 />
//         <HS3 />
//         {/* <Admission />
//         <Activities />
//         <Pricing />
//         <Testimonials /> */}
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./components/Activities";
import Admission from "./components/Admission";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HS2 from "./components/HS2";
import HS3 from "./components/HS3";
import TopBar from "./components/TopBar";
import ContactUs from "./components/Contact";

const App = () => {
  return (
    <Router>
      {/* <TopBar /> */}
      <NavBar />
      <div className="max-w-10xl mx-auto">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
