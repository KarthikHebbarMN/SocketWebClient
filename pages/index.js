import React,{Fragment} from "react";

import Hero from "../components/Hero/Hero";
import Cards from "../components/cards/Cards";
import Items from "../components/items/Items";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Progress from "../components/UserFlow";
import Interactable from "../components/Interactable/Interactable";

export const Home = () => {
  return (
   <Fragment>
      <Hero />
      <Cards />
      <Items />
      <Interactable />
      <Progress />
      <FAQ />
      <Footer />
      </Fragment>
  );
};

export default Home;
