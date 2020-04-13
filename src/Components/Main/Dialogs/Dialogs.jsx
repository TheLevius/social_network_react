import React from "react";
import styles from  "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
      <div className="Dialogs block">
          <div className={styles._container}>
              <h6 className={styles._header}>Диалоги</h6>
              <DialogItem name="Nikita" id="1"/>
              <DialogItem name="Vladimir" id="2"/>
              <DialogItem name="Misha" id="3"/>
              <DialogItem name="Sergey" id="4"/>
          </div>
      </div>
    );
}

export default Dialogs;