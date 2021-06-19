import React from "react";
import styles from "../AwesomeChair/awesomechair.module.css";

export const AwesomeChair = () => {
  const cardinfo = [
    {
      title: "Awesome Chair",
      price: "Rs 3,999",
    },
    {
      title: "Awesome Chair",
      price: "Rs 3,999",
    },
    {
      title: "Awesome Chair",
      price: "Rs 3,999",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className={styles.itemsdiv} key={index}>
        <div className={styles.first}>
          <h2 className={styles.awesome}>{card.title}</h2>
          <h4 className={styles.awesome1}>{card.price}</h4>
          <button className={styles.awesomebtn}>Buy now</button>
        </div>
      </div>
    );
  };
  return <>{cardinfo.map(renderCard)}</>;
};

export default AwesomeChair;
