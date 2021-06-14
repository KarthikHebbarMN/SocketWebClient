import React from "react";
import styles from "../Hero/Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <a className="navbar-brand">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Podcast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button type="button" className={styles.btn1}>
                Sign in
              </button>
              <button type="button" className={styles.btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div className={styles.hero}>
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

            <button type="button" className={styles.signup}>
              Sign up
            </button>

            <button type="button" className={styles.signin}>
              Sign in
            </button>
          </div>
        </div>
      </div> */}

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
