import React, { Fragment } from "react";
import Hero from "../component/Hero/Hero";
import Cards from "../component/cards/Cards";
import AwesomeChair from "../component/items/AwesomeChair/AwesomeChair";

import Letsbuild from "../component/items/Letsbuild/Letsbuild";
import Navbar from "../component/Navbar/Navbar";


import FAQ from "../component/FAQ/FAQ";
import Footer from "../component/Footer/Footer";
import Progress from "../component/UserFlow";
import Interactable from "../component/Interactable/Interactable";

import RecentArticles from "../component/items/RecentArticles/RecentArticles";


import HomePage from "../component/Home/HomePage";

export const Home = () => {
  return (
    <Fragment>

      <Navbar />
      {/* <Hero /> */}
      <HomePage />


      {/* <Hero /> */}
      <HomePage />

      <Cards />
      <AwesomeChair />
      <Interactable />

      {/* <RecentArticles /> */}


      <Progress />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default Home;
