import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./../../../redux/messagesReducer";
import Chat from "./Chat";


const ChatContainer = (props) => {
    let state = props.store.getState();

    let onSendMsgClick = () => {
        props.dispatch(sendMessageCreator());
    };

    let onNewMsgChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    };
    return (
        <Chat updateNewMsgBody={onNewMsgChange} sendMessage={onSendMsgClick} messagesPage={state.messagesPage}/>
    );
}

export default ChatContainer;