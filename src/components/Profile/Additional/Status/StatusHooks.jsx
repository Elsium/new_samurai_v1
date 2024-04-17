import React, {useEffect, useState} from 'react';
import style from './Status.module.scss'

const StatusHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.canStatusChange) {
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.sendUpdateStatus(status);
    }

    const onUpdateStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.wrapper}>
            {editMode
                ? <div className={style.changed}>
                    <div>Status:</div>
                    <input onChange={onUpdateStatus} onBlur={deactivateEditMode} autoFocus={true} value={status}
                           type="text"/>
                </div>
                : <div className={style.noChanged}>
                    <div>Status:</div>
                    <span onDoubleClick={activateEditMode}
                          className={status ? "" : style.nostatus}>{status || "No status yet."}</span>
                </div>
            }
        </div>
    );
}

export default StatusHooks;