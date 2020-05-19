import React from "react";
import styles from "./PublishPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const PublishPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <div className="PublishPost block">
            <div className={styles._container}>
                <h6 className={styles._header}>Опубликовать пост</h6>
                <div className={styles._containerGrid}>
                    <textarea className={styles._textareaCell}
                              placeholder="Написать..."
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}>

                    </textarea>
                    <button type="submit" className={styles._buttonPub} onClick={addPost}>Написать</button>
                </div>
            </div>
        </div>
    );
}

export default PublishPost;