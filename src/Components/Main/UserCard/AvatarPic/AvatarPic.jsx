import React from "react";
import styles from "./AvatarPic.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatarPic from './../../../../img/jpg/avatar.jpg';

const AvatarPic = ({profile, isOwner, savePhoto}) => {
    if (!profile) {
       return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (

        <div className="AvatarPic block">
            <div className={`${styles._box} ${styles.userCard}`}>
                <img className={styles._photo}
                     src={profile.photos.large || avatarPic}
                />
            </div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {profile.lookingForAJob ? 'Yes': 'No'}
        </div>
    );
}

export default AvatarPic;