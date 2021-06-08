import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
          TV
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={
            toggleState === 1 ? styles.active_content : styles.content
          }>
          <div className={styles.list_main}>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1573869908170-64b53a60d8da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZsb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1560780552-ba54683cb263?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1611072337226-1140ab367200?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2 ? styles.active_content : styles.content
          }>
          <div className={styles.list_main}>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1611486212355-d276af4581c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGUlMjBkZXNpZ258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1577017050748-389f0021d860?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRhYmxlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
            <div className={styles.list}>
              <img
                className={styles.item_img}
                src='https://images.unsplash.com/photo-1601760561233-ce085e1e4a53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHRhYmxlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='img'></img>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 3 ? styles.active_content : styles.content
          }></div>
        <div
          className={
            toggleState === 4 ? styles.active_content : styles.content
          }></div>
      </div>
    </div>
  );
}

export default Tab;
