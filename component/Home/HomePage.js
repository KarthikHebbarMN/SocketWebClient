import React from "react";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div class={styles.text_box}>
            <h1>
              Refine the tone
              <br /> of your space
            </h1>
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
    </>
  );
};

export default HomePage;
