import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";


const Navigation = () => {
    return (
        <nav className="Navigation block">
            <ul className={styles._containerNav}>
                <li className={styles._item}>
                    <NavLink to='/profile' className={styles._itemLink} activeClassName={styles.activeLink}><span>Profile</span></NavLink>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
                <li className={styles._item}>
                    <NavLink to='/dialogs' className={styles._itemLink} activeClassName={styles.activeLink}><span>Messages</span></NavLink>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
                <li className={styles._item}>
                    <NavLink to='/users' className={styles._itemLink} activeClassName={styles.activeLink}><span>Users</span></NavLink>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
                <li className={styles._item}>
                    <a className={styles._itemLink}><span>News</span></a>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
                <li className={styles._item}>
                    <a className={styles._itemLink}><span>Music</span></a>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
                <li className={styles._item}>
                    <a className={styles._itemLink}><span>Settings</span></a>
                    <div className={styles._notifyCell}><span>99</span></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;