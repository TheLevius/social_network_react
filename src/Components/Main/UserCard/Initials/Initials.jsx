import React from "react";
import styles from "./Initials.module.css";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";

const Initials = ({status, updateStatus}) => {
    return (
      <div className="Initials block">
          <div className={styles._column}>
              <div className={styles._username}>
                  <span>Nikita Levitski</span>
              </div>
              <hr className={styles._sepLine} />
              <div className={styles._statusBox}>
                  <UserStatusWithHooks status={status} updateStatus={updateStatus}/>
              </div>
          </div>
      </div>
    );
}

export default Initials;