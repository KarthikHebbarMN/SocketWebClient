import React, { Fragment } from "react";
import styles from "../Footer/Footer.module.css";
import Footerdata from "./Footerdata";

function Footer() {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.pname}>
            Working with wireframes may be a<br /> architecture to the visual
            design.
          </p>

          <div className={styles.row}>
            {Footerdata.map((val) => (
              <div className={styles.footercol}>
                <ul>
                  <h4 className={styles.footerhead}>{val.heading}</h4>

                  <li className={styles.listitems}>
                    <a href="#">{val.subheading1}</a>
                  </li>

                  <li className={styles.listitems}>
                    <a href="#">{val.subheading2}</a>
                  </li>

                  <li className={styles.listitems}>
                    <a href="#">{val.subheading3}</a>
                  </li>

                  <li className={styles.listitems}>
                    <a href="#">{val.subheading4}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
