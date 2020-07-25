import React from "react";
import styles from "./AvatarPic.module.css";
import Preloader from "../../common/Preloader/Preloader";

const AvatarPic = ({profile}) => {
    if (!profile) {
       return <Preloader />
    }
    return (
        <div className="AvatarPic block">
            <div className={`${styles._box} ${styles.userCard}`}>
                <img className={styles._photo} src={profile.photos.large} />
            </div>
        </div>
    );
}

export default AvatarPic;