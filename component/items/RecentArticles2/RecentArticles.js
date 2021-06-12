import React from "react";
import styles from "../Recentarticles/recentarticle.module.css";

export const RecentArticles = () => {
  return (
    <>
      <div className={styles.articles}>
        <h1 className={styles.recent}>Recent Articles</h1>
        <div className={styles.maindiv}>
          <div className={styles.article1}>
            <h1 className={styles.dentaltxt}>Dental</h1>
            <h3 className={styles.dentalbody}>
              Though the gravity still dragged at him
            </h3>
            <h4 className={styles.date}>30 october 2019</h4>
          </div>
          <div className={styles.article2}>
            <h1 className={styles.dentaltxt}>Cardeology</h1>
            <h3 className={styles.dentalbody}>
              His muscles were making great efforts to adjust
            </h3>
            <h4 className={styles.date}>30 october 2019</h4>
          </div>
        </div>

        <div className={styles.maindiv2}>
          <div className={styles.smalldiv1}>
            <h4 className={styles.eyecare}>Eye Care</h4>
            <h2 className={styles.topic}>
              After the daily classes he no longer collapsed
            </h2>
            <h4 className={styles.smalldivdate}>30 october 2019</h4>
          </div>
          <div className={styles.smalldiv2}>
            <h4 className={styles.eyecare}>Eye Care</h4>
            <h2 className={styles.topic}>
              After the daily classes he no longer collapsed
            </h2>
            <h4 className={styles.smalldivdate}>30 october 2019</h4>
          </div>
        </div>
        <button className={styles.morearticles}>More Articles</button>
      </div>
    </>
  );
};

export default RecentArticles;
