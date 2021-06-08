import React from "react";
import tab_data from "./tab_data";
import styles from "./styles.module.css";

const Tab = () => {
  const tabMain = tab_data.map((val) => (
    <div className={styles.mbtn}>
      <button className={styles.btn}>{val.name}</button>
    </div>
  ));
  return <>{tabMain}</>;
};
export default Tab;
