import React from 'react';
import UserCard from './UserCard';
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from '../../../redux/profileReducer';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class UserCardContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 8418}
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <div>
                <UserCard {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
) (UserCardContainer);


