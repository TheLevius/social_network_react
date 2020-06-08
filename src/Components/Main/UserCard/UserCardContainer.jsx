import React from 'react';
import UserCard from './UserCard';
import * as axios from 'axios';
import {connect} from "react-redux";
import {setUserProfile} from '../../../redux/profileReducer';
import {withRouter} from 'react-router-dom';


class UserCardContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 54}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);