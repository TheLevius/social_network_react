import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../../utils/validators/validators";
import styles from "../Chat.module.css";

const maxLength50 = maxLengthCreator(50);

export const AddMsgForm = (props) => {

    return (
        <form className={styles._containerGrid} onSubmit={props.handleSubmit}>
            <div className={styles.msgInputBox}>
                <Field component={Textarea} name={'newMsgBody'} placeholder={'Enter your message'} validate={[required, maxLength50]}/>
            </div>
            <div className={styles.btnSendMsgBox}>
                <button className={styles.btnSendMsg}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'ChatAddMsgForm'}) (AddMsgForm);