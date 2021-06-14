import React from "react";
import styles from "../FAQ/FAQ.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const FAQ = () => {
  return (
    <>
      <h1 className={styles.faqheading}>Frequently Asked Questions</h1>
      <div className={styles.faq}>
        <div className={styles.list1}>
          <ul className={styles.listblock}>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?{" "}
              <a href="" className={styles.arrow}>
                <ArrowForwardIosIcon />
              </a>
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
              <a href="" className={styles.arrow}>
                <ArrowForwardIosIcon />
              </a>
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
              <a href="" className={styles.arrow}>
                <ArrowForwardIosIcon />
              </a>
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
              <a href="" className={styles.arrow}>
                <ArrowForwardIosIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.list2}></div>
        <ul className={styles.listblock1}>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
            <a href="" className={styles.arrow}>
              <ArrowForwardIosIcon />
            </a>
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
            <a href="" className={styles.arrow}>
              <ArrowForwardIosIcon />
            </a>
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
            <a href="" className={styles.arrow}>
              <ArrowForwardIosIcon />
            </a>
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
            <a href="" className={styles.arrow}>
              <ArrowForwardIosIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FAQ;
