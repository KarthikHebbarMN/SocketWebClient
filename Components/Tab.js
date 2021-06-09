import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import tab_data from "./tab_data";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabMain = tab_data.map((val) => (
    <div className={styles.tab_container}>
      <div className={styles.bloc_tabs}>
        <button
          className={toggleState === val.id ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(val.id)}>
          {val.type}
        </button>
      </div>
      <div className={styles.content_tabs}>
        <div
          className={
            toggleState === val.id ? styles.active_content : styles.content
          }>
          <div className={styles.list_main}>
            <div className={styles.list}>
              <img className={styles.item_img} src={val.img1} alt='img'></img>
            </div>
            <div className={styles.list}>
              <img className={styles.item_img} src={val.img2} alt='img'></img>
            </div>
            <div className={styles.list}>
              <img className={styles.item_img} src={val.img3} alt='img'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <>{tabMain}</>;
};
export default Tab;
