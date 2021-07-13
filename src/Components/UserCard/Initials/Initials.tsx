import React, {useState} from "react";
import styles from "./Initials.module.css";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import InitialsDataForm from "./InitialsDataForm";
import {ContactsType, ProfileType} from '../../../types/reduxTypes';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Initials: React.FC<PropsType> = ({status, updateStatus, profile, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
            .then(()=>{
                setEditMode(false);
            });
    }

    return (
        <div className="Initials block">
            <div className={styles._column}>
                <div className={styles._initialsDataBox}>
                    {
                        editMode
                        ? <InitialsDataForm profile={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
                </div>
                <hr className={styles._sepLine}/>
                <div className={styles._statusBox}>
                    <UserStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <>
        {isOwner && <div className={styles._editModeBtn}>
            <button onClick={goToEditMode}>
                edit
            </button>
        </div>}
        <div className={styles._username}>
            <span>{profile.fullName}</span>
        </div>
        <div className={styles._jobstatus}>
            <span>Looking for a Job: {profile.lookingForAJob ? 'Yes' : 'No'}</span>
        </div>
        {profile.lookingForAJob &&
        <div className={styles._jobstatus}>
                    <span>My professional skills:<br/>
                        {profile.lookingForAJobDescription}
                    </span>
        </div>
        }
        <div className={styles._aboutuser}>
            <span>About me: {profile.aboutMe}</span>
        </div>
        <div className={styles._contacts}>
                    <span>
                      contacts: {
                        Object.keys(profile.contacts).map((key) => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                        })
                    }
                    </span>
        </div>
    </>
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={styles._contacts}>
        <span>{contactTitle}: {contactValue}</span>
    </div>
}

export default Initials;