import React, { Fragment } from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import tab_data from "./tab_data";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabMain = tab_data.map((val) => (
    <Fragment>
      <div className={styles.content_tab}>
        <div
          className={
            toggleState === val.id ? styles.active_content : styles.content
          }>
          <div className={styles.list_main}>
            <div className={styles.list}>
              <div className={styles.product_img}>
                <img className={styles.item_img} src={val.img1} alt='img'></img>
              </div>
              <div className={styles.product_details}>
                <h3>{val.product1}</h3>
                <p>{val.description1}</p>
                <p>Price = {val.price1}</p>
              </div>
              <div className={styles.product_star}>
                <StarBorderIcon />
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.product_img}>
                <img className={styles.item_img} src={val.img2} alt='img'></img>
              </div>
              <div className={styles.product_details}>
                <h3>{val.product2}</h3>
                <p>{val.description2}</p>
                <p>Price = {val.price2}</p>
              </div>
              <div className={styles.product_star}>
                <StarBorderIcon />
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.product_img}>
                <img className={styles.item_img} src={val.img3} alt='img'></img>
              </div>
              <div className={styles.product_details}>
                <h3>{val.product3}</h3>
                <p>{val.description3}</p>
                <p>Price = {val.price3}</p>
              </div>
              <div className={styles.product_star}>
                <StarBorderIcon />
                {/* <p>recommended</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ));
  return (
    <div className={styles.tab_container}>
      <div className={styles.bloc_tabs}>
        <button
          className={toggleState === 1 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(1)}>
          Floor
        </button>

        <button
          className={toggleState === 2 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(2)}>
          Table
        </button>
        <button
          className={toggleState === 3 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(3)}>
          Chair
        </button>
        <button
          className={toggleState === 4 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(4)}>
          Wallpaper
        </button>
      </div>
      {tabMain}
    </div>
  );
};
export default Tab;
