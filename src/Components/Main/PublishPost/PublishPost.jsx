import React from "react";
import styles from "./PublishPost.module.css";

const PublishPost = () => {
    return (
        <div className="PublishPost block">
            <div className={styles._container}>
                <h6 className={styles._header}>Опубликовать пост</h6>
                <div className={styles._containerGrid}>
                    <textarea className={styles._textareaCell} placeholder="Написать..."></textarea>
                    <button type="submit" className={styles._buttonPub}>Написать</button>
                </div>
            </div>
        </div>
    );
}

export default PublishPost;