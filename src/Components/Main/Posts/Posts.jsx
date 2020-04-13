import React from "react";
import styles from "./Posts.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Posts = () => {
    return (
      <div className="Posts block">
          <div className={styles._container}>
              <h6 className={styles._header}>Написать пост</h6>

          </div>
      </div>
    );

}

export default Posts;