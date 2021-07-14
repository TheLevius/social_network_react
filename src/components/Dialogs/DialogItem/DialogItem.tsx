import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./DialogItem.module.css";
import photo from "../../../img/jpg/avatar.jpg";
import {DialogItemType} from '../Dialogs';


const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className="DialogItem block">
            <NavLink to={"/dialogs/" + props.id} className={styles._containerGrid}>
                <div className={`${styles._avatarBox} ${styles.dialogAva}`}>
                    <img className={styles._avatarImg} src={photo}/>
                </div>
                <div className={styles.usernameBox}>
                    <span><strong>{props.name}</strong></span>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;