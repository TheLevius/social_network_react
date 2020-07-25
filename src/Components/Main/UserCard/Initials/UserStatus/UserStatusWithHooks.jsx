import React, {useEffect, useState} from 'react';
import styles from './UserStatus.module.css';

const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <span className={styles._statusString} onDoubleClick={activateEditMode}>
                        {props.status || 'set status'}
                </span>
            }
            {editMode &&
                <div>
                    <input value={status} autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}/>
                </div>
            }

        </div>
    )

};

export default UserStatusWithHooks;