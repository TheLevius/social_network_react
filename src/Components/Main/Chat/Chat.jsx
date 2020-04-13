import React from "react";
import styles from "./Chat.module.css";
import Log from "./Log/Log";

const Chat = (props) => {
    return (
        <div className="Chat block">
            <div className={styles._container}>
                <h6 className={styles._header}>Чат</h6>

                <Log />
            </div>
        </div>
    );
}

export default Chat;