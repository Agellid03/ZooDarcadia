import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contacts from "../pages/Contacts";
import Habitats from "../pages/Habitats";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default AppRouter;
