import React from "react";
import styles from "../Hero/Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1 className={styles.divtext}>
            Refine the tone
            <br /> of your space
          </h1>
          <p className={styles.divptext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ut
            in ornare vitae nibh at. Quis sagittis diam dolor turpis at
            ullamcorper interdum elementum. Et adipiscing ac a faucibus neque,
            pretium, nisl.
          </p>
          <div className={styles.searchbar}>
            <input
              className={styles.searchtext}
              type="text"
              placeholder="Type your email for this"
              name="search"
            />
            <a className={styles.searchbtn} href="#"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
