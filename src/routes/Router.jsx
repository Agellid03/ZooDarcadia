import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ServicesSection from "../components/ServicesSection";
import AllHabitats from "../pages/AllHabitats";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/habitats" element={<AllHabitats />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
