import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./../../../redux/messagesReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMsgBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;