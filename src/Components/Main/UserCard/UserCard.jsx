import React from 'react';
import styles from './UserCard.module.css';
import AvatarPic from "./AvatarPic/AvatarPic";
import Initials from "./Initials/Initials";


const UserCard = () => {
    return (
        <div className="UserCard block">
            <div className={`${styles._containerGrid} ${styles.wallpaper}`}>
                <div className={styles._AvatarCol}>
                    <AvatarPic/>
                </div>
                <div className={styles._initialCol}>
                    <Initials/>
                </div>
            </div>
        </div>
    );
}

export default UserCard;

