import React from "react";
import styles from "../cards/Cards.module.css";

export const Cards = () => {
  return (
    <>
      <div className={styles.heading}>
        <h1>How do we stay ahead of the curve and we are different</h1>
        <div className={styles.card}>
          <img alt="Avatar" />
          <div className={styles.container}>
            <h4>
              <b className={styles.bheading}>Send us inspiration</b>
            </h4>
            <p className={styles.cardp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              viverra proin orci feugiat proin pulvinar mauris egestas. Sed
              convallis sed lacinia eu aliquet. Sit est sodales nunc dignissim
              in proin ac.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className={styles.card2}>
          <img alt="Avatar" />
          <div className={styles.container}>
            <h4>
              <b className={styles.bheading}>Send us inspiration</b>
            </h4>
            <p className={styles.cardp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              viverra proin orci feugiat proin pulvinar mauris egestas. Sed
              convallis sed lacinia eu aliquet. Sit est sodales nunc dignissim
              in proin ac.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className={styles.card3}>
          <img alt="Avatar" />
          <div className={styles.container}>
            <h4>
              <b className={styles.bheading}>Send us inspiration</b>
            </h4>
            <p className={styles.cardp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              viverra proin orci feugiat proin pulvinar mauris egestas. Sed
              convallis sed lacinia eu aliquet. Sit est sodales nunc dignissim
              in proin ac.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
