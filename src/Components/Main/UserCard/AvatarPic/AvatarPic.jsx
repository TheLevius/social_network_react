import React from "react";
import styles from "./AvatarPic.module.css";
import photo from "./../../../../img/jpg/avatar.jpg";

const AvatarPic = () => {
    return (
        <div className="AvatarPic block">
            <div className={`${styles._box} ${styles.userCard}`}>
                <img className={styles._photo} src={photo}/>
            </div>
        </div>
    );
}

export default AvatarPic;