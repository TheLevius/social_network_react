import React from 'react';
import styles from './UserCard.module.css';
import AvatarPic from "./AvatarPic/AvatarPic";
import Initials from "./Initials/Initials";


const UserCard = (props) => {
    return (
        <div className="UserCard block">
            <div className={`${styles._containerGrid} ${styles.wallpaper}`}>
                <div className={styles._AvatarCol}>
                    <AvatarPic profile={props.profile}/>
                </div>
                <div className={styles._initialsCol}>
                    <Initials status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    );
}

export default UserCard;

