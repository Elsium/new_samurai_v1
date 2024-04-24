import React, {useEffect, useState} from 'react';
import style from './Status.module.scss'

type PropsType = {
    status: string,
    canStatusChange: boolean,
    sendUpdateStatus: (status: string) => void
}

const StatusHooks = (props: PropsType) => {
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

    const onUpdateStatus = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.wrapper}>
            {editMode
                ? <div className={style.changed}>
                    <input onChange={onUpdateStatus} onBlur={deactivateEditMode} autoFocus={true} value={status}
                           type="text"/>
                </div>
                : <div className={style.noChanged}>
                    <span onDoubleClick={activateEditMode}
                          className={status ? "" : style.nostatus}>{status || "No status yet."}</span>
                </div>
            }
        </div>
    );
}

export default StatusHooks;