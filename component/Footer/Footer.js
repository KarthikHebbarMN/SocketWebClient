import React from "react";
import styles from "../Footer/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerr}>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.pname}>
              Working with wireframes may be a<br /> architecture to the visual
              design.
            </p>
            <div className={styles.row}>
              <div className={styles.footercol}>
                <ul>
                  <h4 className={styles.footerhead}>Store</h4>
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
                <ul>
                  <h4 className={styles.footerhead}>About</h4>
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
                <ul>
                  <h4 className={styles.footerhead}>Catalog</h4>
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
