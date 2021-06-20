import React,{Fragment} from "react";
import Meta from '../seo/Meta'
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.container}>
          <div class={styles.text_box}>
          <img src="https://larcel-image-storage.s3.ap-south-1.amazonaws.com/BlackMarble_Wall_.jpg"/>
            <h1>
              Refine the tone
              <br /> of your space
            </h1>
            <Meta title="Refine the tone" desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            cursus efficitur massa, eget porttitor ante malesuada ut. Vivamus
            interdum rhoncus velit at bibendum. Nunc augue tellus"/>
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
