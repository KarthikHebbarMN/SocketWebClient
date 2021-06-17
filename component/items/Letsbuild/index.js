import React from "react";
import styles from "../Letsbuild/letsbuild.module.css";

export const LetsBuild = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.innerbanner}>
          <div className={styles.searchbarbanner}>
            <div className={styles.searchbar}>
              <input
                className={styles.searchtext}
                type="text"
                placeholder="Type your email for this"
                name="search"
              />
              <a className={styles.searchbtn} href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsBuild;
