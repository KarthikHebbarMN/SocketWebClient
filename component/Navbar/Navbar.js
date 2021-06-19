import React, { useState, useEffect, useRef } from "react";
import styles from "../Navbar/Navbar.module.css";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={styles.Navbar}>
        <a href="" className={styles.Navicon}>
          <img src="images/Frame3631.png" />
        </a>
        <div className={styles.leftSide}></div>
        <div ref={menuRef} className={styles.rightSide}>
          <div className={styles.links} id={showLinks ? styles.hidden : ""}>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Podcast</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <button className={styles.togglebtn}>
            <MenuOutlinedIcon onClick={() => setShowLinks(!showLinks)} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
