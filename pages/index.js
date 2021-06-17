import React, { Fragment } from "react";
import Hero from "../component/Hero/Hero";
import Cards from "../component/cards/Cards";
import AwesomeChair from "../component/items/AwesomeChair/AwesomeChair";
import Navbar from "../component/Navbar/Navbar";
import FAQ from "../component/FAQ/FAQ";
import Footer from "../component/Footer/Footer";
import Progress from "../component/UserFlow";
import Interactable from "../component/Interactable/Interactable";
import HomePage from "../component/Home/HomePage";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <Hero /> */}
      <HomePage />
      <Cards />
      <AwesomeChair />
      <Interactable />
      <Progress />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default Home;
