import React from "react";
import styles from "./Chat.module.css";
import userpic from "./../../../img/jpg/avatar.jpg";
import AddMsgFormRedux from "./AddMsgForm/AddMsgForm";
import { InitialStateType } from "../../../redux/messagesReducer";

type PropsType = {
    messagesPage: InitialStateType
    sendMessage: (msgText: string) => void
}

export type NewMsgFormValuesType = {
    newMessageBody: string
}

const Chat: React.FC<PropsType> = (props) => {
    let state = props.messagesPage;

    let message = state.messagesData.map( (el)=> {

        let sender = el.isSelf ?  {msgCont: styles._selfMsgCell, msgAva: styles._selfAvaCell}
            : {msgCont: styles._userMsgCell, msgAva: styles._userAvaCell};

        return (
            <div className={styles._containerGrid}>
                <div className={sender.msgAva}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
                <div className={sender.msgCont}>
                    <span>{el.message}</span>
                </div>
            </div>
        );
    });

    let addNewMessage = (values: NewMsgFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className="Chat block">
            <div className={styles._container}>
                <h6 className={styles._header}>Чат</h6>
                {message}
                <AddMsgFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Chat;