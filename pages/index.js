import React, { Fragment } from "react";
import '../component/styles.module.css'
import Ecommerce from "../component/items/AwesomeChair/Ecommerce";

import Navbar from "../component/Navbar/Navbar";

import FAQ from "../component/FAQ/FAQ";
import Footer from "../component/Footer/Footer";
import Progress from "../component/UserFlow";
import Interactable from "../component/Interactable/Interactable";

import HomePage from "../component/Home/HomePage";
import DynamicCard from "../component/cards/DynamicCard";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
      <DynamicCard />
      <Ecommerce />
      <Interactable />
      <Progress />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default Home;
