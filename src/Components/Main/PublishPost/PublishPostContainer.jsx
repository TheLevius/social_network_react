import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import PublishPost from "./PublishPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
};

const PublishPostContainer = connect(mapStateToProps, mapDispatchToProps)(PublishPost);

export default PublishPostContainer;