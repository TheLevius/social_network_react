import React from "react";
import {actions} from "../../redux/messagesReducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from '../../redux/reduxStore';

let mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }

};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
) (Chat);