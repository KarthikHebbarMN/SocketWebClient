import React from "react";


import Hero from "../components/Hero/Hero";
import Cards from "../components/cards/Cards";
import Items from "../components/items/Items";
import Interactable from "../components/Interactable/Interactable";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Progress from '../Components/Userflow/progress'

export const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Items />
      <Interactable/>
      <FAQ />
      <Footer />
      <Progress />
    </>

  );
};

export default Home;
