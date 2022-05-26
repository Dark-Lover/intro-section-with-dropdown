import React from "react";
import styles from "./Showcase.module.css";
import showcaseImg from "../../assets/image-hero-mobile.png";
const ShowCase = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Make remote work</h1>
        <p className={styles.lead}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={styles.btn}>Learn more</button>
      </div>
      <div className={styles.imgBox}>
        <img src={showcaseImg} alt="showcase" />
      </div>
    </main>
  );
};

export default ShowCase;
