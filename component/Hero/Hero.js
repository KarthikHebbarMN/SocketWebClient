import React from "react";
import styles from "../Hero/Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#">
          <img src="images/Frame 3631.png" />
        </a>

        <div className={styles.navlinks} id="NavLinks">
          <i className="fa fa-times" onclick="hideMenu()"></i>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">Blog</a>
            </li>
            <li>
              <a href="course.html">Podcast</a>
            </li>
            <li>
              <a href="blog.html">About Us</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <button className={styles.btn1}>Sign in</button>

        <button className={styles.btn}>Sign Up</button>
      </nav>

      {/* Navbar ends */}
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
    </>
  );
};

export default Hero;
