import React from 'react';
import UserCard from './UserCard';
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from '../../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class UserCardContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 54}
        this.props.getUserProfile(userId);

    }

    render() {
        return (
            <div>
                <UserCard {...this.props} profile={this.props.profile} />
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(UserCardContainer);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);