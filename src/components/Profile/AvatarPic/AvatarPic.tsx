import React, {ChangeEvent} from 'react';
import styles from './AvatarPic.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPicByDefault from '../../../img/svg/user-pic-default.svg';
import {ProfileType} from '../../../types/reduxTypes';

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    savePhoto: (file: File) => void
}

const AvatarPic: React.FC<PropsType> = ({profile, isOwner, savePhoto}) => {
    if (!profile) {
       return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (

        <div className="AvatarPic block">
            <div className={`${styles._box} ${styles.userCard}`}>
                <img className={styles._photo}
                     src={profile.photos.large || userPicByDefault}
                />
            </div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {profile.lookingForAJob ? 'Yes': 'No'}
        </div>
    );
}

export default AvatarPic;