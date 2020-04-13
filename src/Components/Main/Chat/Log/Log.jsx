import React from "react";
import styles from "./Log.module.css";
import userpic from "../../../../img/jpg/avatar.jpg";


const Log = (props) => {
    return (
        <div className="Log block">

            <div className={styles._userContainer}>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
                <div className={styles._userMsgCell}>
                    <span>Msg example</span>
                </div>
            </div>
            <div className={styles._selfContainer}>
                <div className={styles._selfMsgCell}>
                    <span>Msg example</span>
                </div>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
            </div>
            <div className={styles._userContainer}>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
                <div className={styles._userMsgCell}>
                    <span>Msg example</span>
                </div>
            </div>
            <div className={styles._selfContainer}>
                <div className={styles._selfMsgCell}>
                    <span>Msg example</span>
                </div>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
            </div>
            <div className={styles._userContainer}>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
                <div className={styles._userMsgCell}>
                    <span>Msg example</span>
                </div>
            </div>
            <div className={styles._selfContainer}>
                <div className={styles._selfMsgCell}>
                    <span>Msg example</span>
                </div>
                <div className={styles._avaCell}>
                    <img className={styles._avaImg} src={userpic}/>
                </div>
            </div>

        </div>
    );
}

export default Log;