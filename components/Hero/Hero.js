import React from "react";
import styles from "../Hero/Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.navbar}>
          <div className={styles.navlogo}>
            <h1>logo</h1>
          </div>
          <div className={styles.navlinks}>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Podcast</li>
              </a>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>

            <button type="button" className={styles.signin}>
              Sign in
            </button>
            <button type="button" className={styles.signup}>
              Sign up
            </button>
          </div>
        </div>
      </div>
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
        <form className={styles.searchbar}>
          <input
            type="text"
            placeholder="Type your email for this"
            name="search"
          />
          <button type="submit">Click Now</button>
        </form>
      </div>
    </>
  );
};

export default Hero;
