import React from "react";
import styles from "./Header.module.css";
import open from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close-menu.svg";
const Header = ({
  menuToggle,
  setMenuToggle,
}: {
  menuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>snap</h1>
      <nav className={styles.menu} onClick={() => setMenuToggle(!menuToggle)}>
        {menuToggle ? (
          <img src={close} alt="close" />
        ) : (
          <img src={open} alt="open" />
        )}
      </nav>
    </header>
  );
};

export default Header;
