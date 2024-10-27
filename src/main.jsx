/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Services from "./pages/services.jsx";
import Education from "./pages/education.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from "./components/navbar.jsx";
import { useEffect, useState } from "react";
import Footer from "./components/footer.jsx";
import Burslar from "./pages/burslar.jsx";
import Application from "./pages/application.jsx";
import Scholarship from "./pages/scholarship.jsx";
import Events from "./pages/events.jsx";

const Root = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes className="min-h-screen">
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education-method" element={<Education />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/burslar" element={<Burslar />} />
          <Route path="/application" element={<Application />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/events" element={<Events />} />

        </Routes>
      </BrowserRouter>
      <Footer theme={theme} setTheme={setTheme} />
    </LanguageProvider>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
