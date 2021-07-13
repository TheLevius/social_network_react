import React from 'react';
import styles from './UserCard.module.css';
import AvatarPic from "./AvatarPic/AvatarPic";
import Initials from "./Initials/Initials";
import {ProfileType} from '../../types/reduxTypes';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const UserCard: React.FC<PropsType> = (props) => {
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

