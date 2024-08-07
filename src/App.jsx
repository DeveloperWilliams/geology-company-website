// src/App.js

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
import Mineral from "./components/servicesComponent/mineral/Mineral";
import Esia from "./components/servicesComponent/esia/Esia";
import RouteChangeLoader from "./components/RouteChangeLoader";
import EquipmentLeaseForm from "./components/hireForm/HireForm";
import Grid from "./components/servicesComponent/grid/Mineral";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <RouteChangeLoader
        beforeLoad={
          <>
            <Navbar />
          </>
        }
        afterLoad={
          <>
            <Hire />
            <Footer />
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/ground-water-management" element={<Groundwater />} />
          <Route path="/geology-and-minerals" element={<Mineral />} />
          <Route path="/solar-system" element={<Esia />} />
          <Route path="/grid-survey" element={<Grid/>}></Route>
          <Route path="/hire-equipment" element={<EquipmentLeaseForm/>}></Route>
        </Routes>
      </RouteChangeLoader>
    </>
  );
};

export default App;
