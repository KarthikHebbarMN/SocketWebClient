import React,{Fragment} from "react";

import Hero from "../component/Hero/Hero";
import Cards from "../component/cards/Cards";
import Items from "../component/items/Items";
import FAQ from "../component/FAQ/FAQ";
import Footer from "../component/Footer/Footer";
//import Progress from "../component/StoryFlow" ;
import Interactable from "../component/Interactable/Interactable";

export const Home = () => {
  return (
   <Fragment>
      <Hero />
      <Cards />
      <Items />
      <Interactable />

      <FAQ />
      <Footer />
      </Fragment>
  );
};

export default Home;
