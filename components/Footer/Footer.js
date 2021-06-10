import React from "react";
import styles from "../Footer/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerr}>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.footercol}>
                <p className={styles.pname}>
                  Working with wireframes may be a<br /> architecture to the
                  visual design.
                </p>
                <h4 className={styles.footerhead}>Store</h4>
                <ul>
                  <li className={styles.listitems}>
                    <a href="#">Catalog</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">Popular</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">Features</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footercol}>
                <h4>About</h4>
                <ul>
                  <li className={styles.listitems}>
                    <a href="#">Catalog</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">popular</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footercol}>
                <h4>Catalog</h4>
                <ul>
                  <li className={styles.listitems}>
                    <a href="#">Catalog</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">Popular</a>
                  </li>
                  <li className={styles.listitems}>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
