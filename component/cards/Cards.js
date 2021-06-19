import React from "react";
import styles from "../cards/Cards.module.css";

export const Cards = () => {
  const cardinfo = [
    {
      image: "images/unsplash.jpg",
      title: "Send Us Inspiration",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "images/unsplash1.jpg",
      title: "Send Us Inspiration",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "images/unsplash2.jpg",
      title: "Send Us Inspiration",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  const renderCard = (card, index) => {
    return (
      // <div className={styles.heading}>
      //

      <div className={styles.cardss} key={index}>
        <div className={styles.card}>
          <img src={card.image} width="100%" alt="Avatar" />
          <div className={styles.container}>
            <h4>
              <h5 className={styles.bheading}>{card.title}</h5>
            </h4>
            <p className={styles.cardp}>{card.text}</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    );
  };

  return <>{cardinfo.map(renderCard)}</>;
};

export default Cards;
