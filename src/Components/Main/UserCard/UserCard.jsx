import React from 'react';
import styles from './UserCard.module.css';
import AvatarPic from "./AvatarPic/AvatarPic";
import Initials from "./Initials/Initials";


const UserCard = (props) => {
    return (
        <div className="UserCard block">
            <div className={`${styles._containerGrid} ${styles.wallpaper}`}>
                <div className={styles._AvatarCol}>
                    <AvatarPic profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
                </div>
                <div className={styles._initialsCol}>
                    <Initials profile={props.profile} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
                </div>
            </div>
        </div>
    );
}

export default UserCard;

