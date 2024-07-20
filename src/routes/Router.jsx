import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HabitatSection from "../components/HabitatSection";
import Header from "../components/header/Header";
import ServicesSection from "../components/ServicesSection";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/habitats" element={<HabitatSection />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default AppRouter;
