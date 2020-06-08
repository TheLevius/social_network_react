import React from "react";
import styles from "./AvatarPic.module.css";
import photo from "./../../../../img/jpg/avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";

const AvatarPic = (props) => {
    if (!props.profile) {
       return <Preloader />
    }
    return (
        <div className="AvatarPic block">
            <div className={`${styles._box} ${styles.userCard}`}>
                <img className={styles._photo} src={props.profile.photos.large} />
            </div>
        </div>
    );
}

export default AvatarPic;