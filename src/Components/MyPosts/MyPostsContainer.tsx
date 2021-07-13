import React from "react";
import {actions} from "../../redux/profileReducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from '../../redux/reduxStore';


const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.postData
    }
};

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;