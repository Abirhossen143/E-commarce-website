import React from "react";
import Hero from "../Component/Hero";
import LatestCollection from "../Component/LatestCollection";
import Bestseller from "../Component/Bestseller";
import OurPolicy from "../Component/OurPolicy";
import Newsletter from "../Component/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
      <OurPolicy />
      <Newsletter />
    </div>
  );
};

export default Home;
