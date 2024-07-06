import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contanct/Contact";
import About from "./components/about/About";
import ScrollToTop from "./components/ScrollToTop";
import Hire from "./components/hire/Hire";
import Groundwater from "./components/servicesComponent/groundwater/Groundwater";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/ground-water-management" element={<Groundwater/>}></Route>
      </Routes>
      <Hire/>
      <Footer />
    </>
  );
};

export default App;
