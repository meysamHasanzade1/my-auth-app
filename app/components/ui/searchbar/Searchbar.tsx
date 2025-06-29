import React from "react";
import styles from "./Searchbar.module.scss";
import { MdMessage, MdNotifications, MdSearch } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
function Searchbar() {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <div className={styles.search}>
        <div className={styles.inputSearch}>
          <MdSearch />
          <input placeholder="Search..." type="text" />
        </div>
        <MdMessage />
        <FaEarthAsia />
        <MdNotifications />
      </div>
    </div>
  );
}

export default Searchbar;
