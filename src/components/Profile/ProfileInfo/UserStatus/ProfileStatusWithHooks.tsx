import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default ProfileStatusWithHooks;