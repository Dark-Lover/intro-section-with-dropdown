import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import d_arrow from "../../assets/icon-arrow-down.svg";
import u_arrow from "../../assets/icon-arrow-up.svg";
import todo from "../../assets/icon-todo.svg";
import calendar from "../../assets/icon-calendar.svg";
import reminder from "../../assets/icon-reminders.svg";
import planning from "../../assets/icon-planning.svg";
import ListItem from "../subComp/ListItem";

const MobileMenu = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [isDropOpenTwo, setIsDropTwoOpen] = useState<boolean>(false);

  return (
    <nav className={styles.mobile_menu}>
      <ul>
        <ListItem
          text="Features"
          imgSrc={isDropOpen ? u_arrow : d_arrow}
          isDropOpen={isDropOpen}
          handleOpenDrop={setIsDropOpen}
        >
          <div className={styles.dropdown}>
            <ul>
              <ListItem text="Todo List" imgSrc={todo} isDrop />
              <ListItem text="Calendar" imgSrc={calendar} isDrop />
              <ListItem text="Reminders" imgSrc={reminder} isDrop />
              <ListItem text="Planning" imgSrc={planning} isDrop />
            </ul>
          </div>
        </ListItem>
        <ListItem
          text="Company"
          imgSrc={isDropOpenTwo ? u_arrow : d_arrow}
          isDropOpen={isDropOpenTwo}
          handleOpenDrop={setIsDropTwoOpen}
        >
          <div className={styles.dropdown}>
            <ul>
              <ListItem text="History" />
              <ListItem text="Our Team" />
              <ListItem text="Blog" />
            </ul>
          </div>
        </ListItem>
        <ListItem text="Careers" />
        <ListItem text="About" />

        <div className={styles.auth}>
          <button className={styles.login}> Login</button>
          <button className={styles.register}> Register</button>
        </div>
      </ul>
    </nav>
  );
};

export default MobileMenu;
