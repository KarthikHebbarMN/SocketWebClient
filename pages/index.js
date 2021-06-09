import React from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/cards/Cards";
import Items from "../components/items/Items";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Items />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
