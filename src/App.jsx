import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About   />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
