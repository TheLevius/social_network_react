import React from "react";
import styles from "./PostedCard.module.css";

const PostedCard = () => {
    return (
        <div className="PostedCard block">
            <div className={styles._container}>
                <h6 className={styles._header}>Пост</h6>
                <div className={styles._containerGrid}>
                    <p className={styles._postParagraph}>
                        Лорем ипсум долор сит амет
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostedCard;