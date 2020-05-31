import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import PublishPost from "./PublishPost";

const PublishPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (<PublishPost updateNewPostText={onPostChange} addPost={addPost} postData={props.postData} newPostText={state.profilePage.newPostText} />);
}

export default PublishPostContainer;