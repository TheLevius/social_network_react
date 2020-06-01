import React from "react";
import styles from "./PublishPost.module.css";
import PostedCard from "./PostedCard/PostedCard";

const PublishPost = (props) => {

    let posts = props.postData.map( el => <PostedCard message={el.message} likesCount={el.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (

        <div className="PublishPost block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h6 className={styles._header}>Опубликовать пост</h6>
                    <div className={styles._containerGrid}>
                    <textarea className={styles._textareaCell}
                              placeholder="Написать..."
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange} />

                        <button type="submit" className={styles._buttonPub} onClick={onAddPost}>Написать</button>
                    </div>
                </div>
                {posts}
            </div>
        </div>
    );
}

export default PublishPost;