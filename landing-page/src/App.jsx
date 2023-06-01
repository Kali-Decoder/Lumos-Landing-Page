import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />

      <Section1 />

      <Features />
      <Testimonial />

      <Footer />
    </>
  );
};

export default App;
