import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AllHabitats from "../pages/AllHabitats";
import AllServices from "../pages/AllServices";
import Contacts from "../pages/Contacts";
import DetailHabitat from "../pages/DetailHabitats";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/habitats" element={<AllHabitats />} />
          <Route path="/habitats/:name" element={<DetailHabitat />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
