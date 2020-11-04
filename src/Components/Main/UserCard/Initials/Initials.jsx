import React, {useState} from "react";
import styles from "./Initials.module.css";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import InitialsDataForm from "./InitialsDataForm";

const Initials = ({status, updateStatus, profile, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
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
                        ? <InitialsDataForm initialValues={profile} profile={profile} isOwner={isOwner} onSubmit={onSubmit} />
                        : <InitialsData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
                </div>
                <hr className={styles._sepLine}/>
                <div className={styles._statusBox}>
                    <UserStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export const InitialsData = ({profile, isOwner, goToEditMode}) => {
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
                        Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        })
                    }
                    </span>
        </div>
    </>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles._contacts}>
        <span>{contactTitle}: {contactValue}</span>
    </div>
}

export default Initials;