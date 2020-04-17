import React from "react";
import styles from "./Posts.module.css";
import PublishPost from "./PublishPost/PublishPost";
import PostedCard from "./PostedCard/PostedCard";

const Posts = () => {
    return (
      <div className="Posts block">
          <div className={styles._container}>
              <PublishPost/>
              <PostedCard/>
          </div>
      </div>
    );
}

export default Posts;