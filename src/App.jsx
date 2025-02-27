import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Careers from "./Components/Template/Careers";
import Faqs from "./Components/Template/Faqs";

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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers-page" element={<Careers />} />
        <Route path="/faqs-page" element={<Faqs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
