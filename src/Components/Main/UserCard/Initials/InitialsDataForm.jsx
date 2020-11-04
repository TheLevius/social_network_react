import React from 'react';
import styles from "./Initials.module.css";
import {Contact} from "./Initials";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles2 from "../../common/FormsControls/FormsControls.module.css";

export const InitialsDataForm = ({handleSubmit, profile, error}) => {
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
            <span>{createField("Full name", 'fullName', [], Input)}</span>
        </div>
        <div className={styles._jobstatus}>
            <span>Looking for a Job {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</span>
        </div>
        {<div className={styles._jobstatus}>
            <span>My professional skills:<br/>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </span>
        </div>
        }
        <div className={styles._aboutuser}>
            <span>About me:</span>
            {createField('About Me', 'aboutMe', [], Textarea)}
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

export const InitialsDataFormReduxForm = reduxForm({form: 'edit-profile'}) (InitialsDataForm)

export default InitialsDataFormReduxForm;