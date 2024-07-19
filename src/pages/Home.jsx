import React from "react";
import BigTitle from "../components/BigTitle";

const Home = () => {
  return (
    <div>
      <BigTitle
        title="Bienvenue au Zoo D’Arcadia"
        subtitle="Un lieu préservé pour s'emmerveiller!"
        imageUrl="./images/Savane.jpeg"
        showButton={true}
      />
    </div>
  );
};

export default Home;
