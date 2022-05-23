import React from "react";
import styles from "./MobileMenu.module.css";
import b_arrow from "../../assets/icon-arrow-down.svg";
const MobileMenu = () => {
  return (
    <nav className={styles.mobile_menu}>
      <ul>
        <li>
          <a>Features</a>
          <img src={b_arrow} alt="arrow" />
        </li>
        <li>
          <a>Company</a>
          <img src={b_arrow} alt="arrow" />
        </li>
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <div className={styles.auth}>
          <button className={styles.login}> Login</button>
          <button className={styles.register}> Register</button>
        </div>
      </ul>
    </nav>
  );
};

export default MobileMenu;
