// import React from "./react";
import styles from "./styles.module.css";
import Tab from "./Tab";
// import List from "./List";
const Interactable = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.split}>
          <div className={styles.left_div}>
            <div className={styles.heading}>
              <h1>Get Personalised</h1>
            </div>
            <div className={styles.tab}>
              {/* <h1>test</h1> */}
              <Tab />
            </div>
            {/* <List /> */}
          </div>
          <div className={styles.right_div}>
            {/* <Img/> */}
            <img
              className='dots'
              src='https://images.unsplash.com/photo-1585128792020-803d29415281?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt='img'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interactable;
