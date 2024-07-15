import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Contacts from "../pages/Contacts";
import Habitats from "../pages/Habitats";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
