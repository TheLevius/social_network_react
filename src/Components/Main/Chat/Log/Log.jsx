import React from "react";
import styles from "./Log.module.css";
import userpic from "../../../../img/jpg/avatar.jpg";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/state";


const Log = (props) => {

    let state = props.store.getState();

    let message = props.messagesPage.messagesData.map( (el)=> {

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

    let newMsgBody = props.messagesPage.newMessageBody;

    let onSendMsgClick = () => {
        props.dispatch(sendMessageCreator())
    };

    let onNewMsgChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className="Log block">
            {message}
            <div className={styles._containerGrid}>
                <div className={styles.msgInputBox}>
                    <textarea value={newMsgBody} onChange={onNewMsgChange} placeholder="Написать сообщение..."></textarea>
                </div>
                <div className={styles.btnSendMsgBox}>
                    <button className={styles.btnSendMsg} onClick={onSendMsgClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Log;