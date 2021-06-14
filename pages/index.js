import React from "react";

import Hero from "../Components/Hero/Hero";
import Cards from "../Components/cards/Cards";
import Items from "../Components/items/Items";
import FAQ from "../Components/FAQ/FAQ";
import Footer from "../Components/Footer/Footer";
import Progress from '../Components/Userflow/progress'


export const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Progress />
      <Items />
      <FAQ />
      <Footer />
    </>

  );
};

export default Home;
