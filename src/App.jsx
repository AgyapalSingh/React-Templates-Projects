import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Careers from "./Components/Template/Careers";
import Faqs from "./Components/Template/Faqs";
import AffiliateProgram from "./Components/Template/AffiliateProgram";
import TintedLaunchPage from "./Components/Animations/TintedLaunchPage";
import CalmingMoisturizerLaunchPage from "./Components/Animations/CalmingMoisturizerLaunchPage";
import AutoScrollToTop from "./Snippit/AutoScrollToTop";
import BodyButterLaunchPage from "./Components/Animations/BodyButterLaunchPage";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      {showTopButton && (
        <button
          className="go-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoIosArrowUp />
        </button>
      )}

      <AutoScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/affiliate-program-page"
            element={<AffiliateProgram />}
          />
          <Route path="/careers-page" element={<Careers />} />
          <Route path="/faqs-page" element={<Faqs />} />
          <Route
            path="/tinted-sunscreen-launch-page"
            element={<TintedLaunchPage />}
          />
          <Route
            path="/calming-moisturizer-launch-page"
            element={<CalmingMoisturizerLaunchPage />}
          />

          <Route
            path="/body-butter-launch-page"
            element={<BodyButterLaunchPage />}
          />
        </Routes>
      </AutoScrollToTop>
      <Footer />
    </>
  );
}

export default App;
