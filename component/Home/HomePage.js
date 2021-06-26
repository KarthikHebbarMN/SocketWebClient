import React, { Fragment,useEffect } from "react";
import Image from 'next/image'
import Meta from "../seo/Meta";
import styles from "./HomePage.module.css";
import axios from 'axios';

const HomePage = () => {
useEffect(async()=>{
  console.log("Fetch form End pont");
  let resp = await axios.get("https://20.197.30.199:80/api/v1/landing/landing");
  console.log(resp);
},[]);
  return (
    <Fragment>

      <div className={styles.header}>
        <div className={styles.container}>
     
          <div className={styles.text_box}>
            <h1>
              Refine the tone
              <br /> of your space
            </h1>
            <Meta
              title='Refine the tone'
              desc=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            cursus efficitur massa, eget porttitor ante malesuada ut. Vivamus
            interdum rhoncus velit at bibendum. Nunc augue tellus'
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus efficitur massa, eget porttitor ante malesuada ut. Vivamus
              interdum rhoncus velit at bibendum. Nunc augue tellus, convallis
              eget orci at, condimentum maximus ligula. Praesent a massa augue.
              Suspendisse potenti.
            </p>
            <button className={styles.btn}>Get Started</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
