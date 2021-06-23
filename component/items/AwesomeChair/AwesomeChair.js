import React, { Fragment } from "react";
import styles from "../AwesomeChair/awesomechair.module.css";
import Chairdata from "./Chairdata";

function AwesomeChair() {
  return (
    <Fragment>
      <div className={styles.box}>
        {Chairdata.map((value, index) => (
          <div className={styles.itemsdiv} key={index}>
            <div className={styles.first}>
              <img src={value.image} alt="image"></img>
              <h2 className={styles.awesome}>{value.title}</h2>
              <h4 className={styles.awesome1}>{value.price}</h4>
              <button className={styles.awesomebtn}>Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default AwesomeChair;

// export const AwesomeChair = () => {
// const cardinfo = [
//   {
//     title: "Awesome Chair",
//     price: "Rs 3,999",
//   },
//   {
//     title: "Awesome Chair",
//     price: "Rs 3,999",
//   },
//   {
//     title: "Awesome Chair",
//     price: "Rs 3,999",
//   },
// ];

//   const renderCard = (card, index) => {
//     return (
//       <div className={styles.itemsdiv} key={index}>
//         <div className={styles.first}>
//           <h2 className={styles.awesome}>{card.title}</h2>
//           <h4 className={styles.awesome1}>{card.price}</h4>
//           <button className={styles.awesomebtn}>Buy now</button>
//         </div>
//       </div>
//     );
//   };
//   return <>{cardinfo.map(renderCard)}</>;
// };

// export default AwesomeChair;
