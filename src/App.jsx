import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catrgories from "./components/Catrgories";
import Featured from "./components/Featured";
import OurProducts from "./components/OurProducts";
import Special from "./components/Special";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" mt-4 mx-20">
      <Navbar />
      <Hero />
      <Catrgories />
      <Featured />
      <OurProducts />
      <Special />
      <Footer />
    </div>
  );
};

export default App;
