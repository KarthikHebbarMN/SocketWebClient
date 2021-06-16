import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.css";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className={styles.Navbar}>
        <a href="#">
          <img src="images/Frame 3631.png" />
        </a>

        <div className={styles.leftSide}>
          <div className={styles.links} id={showLinks ? styles.hidden : ""}>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Podcast</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.togglebtn}>
            <MenuOutlinedIcon onClick={() => setShowLinks(!showLinks)} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
