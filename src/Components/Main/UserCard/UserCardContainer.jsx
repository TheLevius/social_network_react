import React from 'react';
import UserCard from "./UserCard";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";


class UserCardContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile}) (UserCardContainer);