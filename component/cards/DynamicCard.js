import React from "react";
import styles from "../cards/Cards.module.css";
import Cards from "../cards/Cards";

export const DynamicCard = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          How do we stay ahead of the curve and we are different
        </h1>
        <Cards />
      </div>
    </>
  );
};

export default DynamicCard;
