import React from "react";
import styles from  "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map ( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)

    return (
      <div className="Dialogs block">
          <div className={styles._container}>
              <h6 className={styles._header}>Диалоги</h6>
              {dialogsElements}
          </div>
      </div>
    );
}

export default Dialogs;