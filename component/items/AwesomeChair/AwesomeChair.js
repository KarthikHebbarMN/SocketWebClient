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
