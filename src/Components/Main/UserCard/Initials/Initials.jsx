import React from "react";
import styles from "./Initials.module.css";
import UserStatus from "./UserStatus/UserStatus";

const Initials = (props) => {
    return (
      <div className="Initials block">
          <div className={styles._column}>
              <div className={styles._username}>
                  <span>Nikita Levitski</span>
              </div>
              <hr className={styles._sepLine} />
              <div className={styles._statusBox}>
                  <UserStatus status={props.status} updateStatus={props.updateStatus}/>
              </div>
          </div>
      </div>
    );
}

export default Initials;