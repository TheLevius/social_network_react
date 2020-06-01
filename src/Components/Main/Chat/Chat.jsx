import React from "react";
import styles from "./Chat.module.css";
import userpic from "./../../../img/jpg/avatar.jpg";

const Chat = (props) => {
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

    let newMsgBody = state.newMessageBody;

    let onSendMsgClick = () => {
        props.sendMessage();
    };

    let onNewMsgChange = (e) => {
        let body = e.target.value;
        props.updateNewMsgBody(body);
    };
    return (
        <div className="Chat block">
            <div className={styles._container}>
                <h6 className={styles._header}>Чат</h6>
                {message}
                <div className={styles._containerGrid}>
                    <div className={styles.msgInputBox}>
                        <textarea value={newMsgBody} onChange={onNewMsgChange} placeholder="Написать сообщение..." />
                    </div>
                    <div className={styles.btnSendMsgBox}>
                        <button className={styles.btnSendMsg} onClick={onSendMsgClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;