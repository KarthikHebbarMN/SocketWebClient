import React, { Fragment } from "react";
import styles from "../cards/Cards.module.css";
import cardinfo from "./cardinfo";

function Cards() {
  return (
    <Fragment>
      <div className={styles.box}>
        {cardinfo.map((card) => (
          <div className={styles.cardss}>
            <div key={card.id} className={styles.card}>
              <img src={card.image} width="100%" alt="Avatar" />
              <div className={styles.container}>
                <h5 className={styles.bheading}>{card.title}</h5>
                <p className={styles.cardp}>{card.text}</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Cards;
