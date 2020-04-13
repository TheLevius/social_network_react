import React from "react";
import styles from "./Initials.module.css";

const Initials = () => {
    return (
      <div className="Initials block">
          <div className={styles._column}>
              <div className={styles._username}>
                  <span>Nikita Levitski</span>
              </div>
              <hr className={styles._sepLine} />
              <div className={styles._statusBox}>
                  <span className={styles._statusString}>
                      Junior Front-end developer (в мечтах)<br />Google Material Design UI React+Redux
                  </span>
              </div>
          </div>
      </div>
    );
}

export default Initials;