import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import d_arrow from "../../assets/icon-arrow-down.svg";
import u_arrow from "../../assets/icon-arrow-up.svg";
import todo from "../../assets/icon-todo.svg";
import calendar from "../../assets/icon-calendar.svg";
import reminder from "../../assets/icon-reminders.svg";
import planning from "../../assets/icon-planning.svg";
import ListItem from "../subComp/ListItem";
import CustomMenuItem, { useOpenState } from "../CustomMenuItem";

const initialOpeningState = {
  features: false,
  company: false,
};
const MobileMenu = () => {
  const { isOpen, handleOpen } = useOpenState(initialOpeningState);

  return (
    <nav className={styles.mobile_menu}>
      <ul>
        <CustomMenuItem>
          <ListItem
            text="Features"
            imgSrc={isOpen.features ? u_arrow : d_arrow}
            isDropOpen={isOpen.features}
            handleOpenDrop={() => handleOpen("features")}
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
        </CustomMenuItem>
        <CustomMenuItem>
          <ListItem
            text="Company"
            imgSrc={isOpen.company ? u_arrow : d_arrow}
            isDropOpen={isOpen.company}
            handleOpenDrop={() => handleOpen("company")}
          >
            <div className={styles.dropdown}>
              <ul>
                <ListItem text="History" />
                <ListItem text="Our Team" />
                <ListItem text="Blog" />
              </ul>
            </div>
          </ListItem>
        </CustomMenuItem>

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
