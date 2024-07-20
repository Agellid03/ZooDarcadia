import React from "react";
import BigTitle from "../components/BigTitle";
import HabitatSection from "../components/HabitatSection";
import ReviewsSection from "../components/ReviewsSection";
import ServicesSection from "../components/ServicesSection";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="section">
        <BigTitle
          title="Le Zoo d’Arcadia, un lieu préservé pour s'emmerveiller"
          subtitle="Nos Habitats"
          imageUrl="./images/Savane.jpeg"
          showButton={true}
        />
      </div>
      <div className="section">
        <HabitatSection />
      </div>
      <div className="section">
        <ServicesSection />
      </div>
      <div className="section">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Home;
