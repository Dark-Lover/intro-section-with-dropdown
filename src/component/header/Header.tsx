import React from "react";
import styles from "./Header.module.css";
import open from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close-menu.svg";
import MobileMenu from "../mobileMenu/MobileMenu";
import DeskMenu from "../desktopMenu/DeskMenu";
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
      <div className={styles.menu} onClick={() => setMenuToggle(!menuToggle)}>
        {menuToggle ? (
          <img src={close} alt="close" />
        ) : (
          <img src={open} alt="open" />
        )}
      </div>

      {menuToggle && (
        <div className={styles.mobile_menu_wrapper}>
          <MobileMenu />
        </div>
      )}

      <div className={styles.desk_menu_wrapper}>
        <DeskMenu />
      </div>
    </header>
  );
};

export default Header;
