import React from "react";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Sponsors from "../components/Sponsors";
import Solution from "../components/Solution";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Sponsors />
      <Solution />
      <Footer />
    </>
  );
};

export default Homepage;
