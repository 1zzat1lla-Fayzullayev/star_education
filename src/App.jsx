import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import Phone from "./shared/phone";
import Results from "./pages/results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/results" index element={<Results />} />
        </Routes>
        <Phone />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
