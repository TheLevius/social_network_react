import React from "react";
import styles from "./PostedCard.module.css";

type PropsType = {
    message: string
    likesCount: number
}

const PostedCard: React.FC<PropsType> = props => {
    return (
        <div className="PostedCard block">
            <div className={styles._container}>
                <h6 className={styles._header}>Пост</h6>
                <div className={styles._containerGrid}>
                    <p className={styles._postParagraph}>
                        {props.message}
                    </p>
                    <div className={styles._postLikesCount}>
                        <span>Likes: {props.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostedCard;