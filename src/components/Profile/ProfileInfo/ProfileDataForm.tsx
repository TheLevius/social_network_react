import React from 'react';
import styles from './ProfileInfo.module.css';
import {InjectedFormProps, reduxForm} from 'redux-form';
import styles2 from '../../common/FormsControls/FormsControls.module.css';
import {ProfileType} from '../../../types/reduxTypes';
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormsControls/FormsControls';


type PropsType = {
    profile: ProfileType

}

type ProfileTypeKeys = GetStringKeys<ProfileType>

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={styles._editModeBtn}>
            <button>
                save
            </button>
        </div>
        { error && <div className={styles2.formSummaryError}>
            {error}
        </div>}
        <div className={styles._username}>
            <span>{createField<ProfileTypeKeys>("Full name", 'fullName', [], Input)}</span>
        </div>
        <div className={styles._jobstatus}>
            <span>Looking for a Job {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</span>
        </div>
        {<div className={styles._jobstatus}>
            <span>My professional skills:<br/>
                {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </span>
        </div>
        }
        <div className={styles._aboutuser}>
            <span>About me:</span>
            {createField<ProfileTypeKeys>('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div className={styles._contacts}>
                    <span>
                      Contacts: {
                        Object.keys(profile.contacts).map(key => {
                            return <div className={styles._contacts} key={key}>
                                {key}: {createField(key, 'contacts.' + key, [], Input)}
                            </div>
                        })
                    }
                    </span>
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;