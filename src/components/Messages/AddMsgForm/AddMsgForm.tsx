import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import styles from "../Messages.module.css";
import {NewMsgFormValuesType} from '../Messages';

const maxLength50 = maxLengthCreator(50);

type NewMsgFormValuesKeysType = Extract<keyof NewMsgFormValuesType, string>
type PropsType = {}

export const AddMsgForm: React.FC<InjectedFormProps<NewMsgFormValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form className={styles._containerGrid} onSubmit={props.handleSubmit}>
            <div className={styles.msgInputBox}>
                {createField<NewMsgFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div className={styles.btnSendMsgBox}>
                <button className={styles.btnSendMsg}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMsgFormValuesType>({form: 'ChatAddMsgForm'}) (AddMsgForm);