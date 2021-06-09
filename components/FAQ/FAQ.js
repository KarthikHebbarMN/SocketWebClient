import React from "react";
import styles from "../FAQ/FAQ.module.css";

export const FAQ = () => {
  return (
    <>
      <div className={styles.faq}>
        <h1 className={styles.faqheading}>Frequently Asked Questions</h1>

        <div className={styles.list1}>
          <ul className={styles.listblock}>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </li>
            <li className={styles.listitems}>
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </li>
          </ul>
        </div>

        <div className={styles.list2}></div>
        <ul className={styles.listblock1}>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
          </li>
          <li className={styles.listitems}>
            Duis aute irure dolor in reprehenderit in voluptate velit?
          </li>
        </ul>
      </div>
    </>
  );
};

export default FAQ;
