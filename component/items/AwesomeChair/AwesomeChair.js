import React from "react";
import styles from "../AwesomeChair/awesomechair.module.css";
import Image from "next/image";

export const AwesomeChair = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.itemsdiv}>
          <div className={styles.first}>
            <h2 className={styles.awesome}>Awesome Chair</h2>
            <h5 className={styles.awesome}>Rs 3,999</h5>
            <button className={styles.awesomebtn}>Buy now</button>
          </div>
          <div className={styles.second}>
            <h2 className={styles.awesome}>Awesome Chair</h2>
            <h5 className={styles.awesome}>Rs 3,999</h5>
            <button className={styles.awesomebtn}>Buy now</button>
          </div>
        </div>
        <div className={styles.third}>
          <div>
            <h2 className={styles.awesome1}>Awesome Chair</h2>
            <h5 className={styles.awesome2}>Rs 3,999</h5>
            <button className={styles.awesomebtn}>Buy now</button>
          </div>
          <div className={styles.thirdchair}>
            <Image
              className={styles.thirdchair}
              src="/images/Rectangle690.png"
              alt="Picture of the author"
              width={350}
              height={500}
            />
          </div>
        </div>
        <button className={styles.letsgo}>Let's Go</button>
      </div>
    </>
  );
};

export default AwesomeChair;
