import React from "react";
import styles from "./Chat.module.css";
import userpic from "./../../../img/jpg/avatar.jpg";
import {Redirect} from "react-router-dom";
import AddMsgFormRedux from "./AddMsgForm/AddMsgForm";

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

    let addNewMsg = (values) => {
        props.sendMessage(values.newMsgBody);
    };

    if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className="Chat block">
            <div className={styles._container}>
                <h6 className={styles._header}>Чат</h6>
                {message}
                <AddMsgFormRedux onSubmit={addNewMsg}/>
            </div>
        </div>
    );
}

export default Chat;