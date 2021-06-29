import React from "react";
import styles from "../AwesomeChair/awesomechair.module.css";
import AwesomeChair from "../AwesomeChair/AwesomeChair";

export const Ecommerce = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Best Selling Products</h1>
        <AwesomeChair />
        <button className={styles.letsgo}>Let's Go</button>
      </div>
    </>
  );
};

export default Ecommerce;
