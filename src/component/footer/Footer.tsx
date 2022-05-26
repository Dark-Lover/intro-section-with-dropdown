import React from "react";
import styles from "./Footer.module.css";
import databiz from "../../assets/client-databiz.svg";
import audiophile from "../../assets/client-audiophile.svg";
import meet from "../../assets/client-meet.svg";
import maker from "../../assets/client-maker.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={databiz} alt="" />
      <img src={audiophile} alt="" />
      <img src={meet} alt="" />
      <img src={maker} alt="" />
    </footer>
  );
};

export default Footer;
