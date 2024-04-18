import React from 'react';
import style from './Additional.module.scss'
import StatusHooks from "./Status/StatusHooks";

const Additional = ({canStatusChange, status, sendUpdateStatus}) => {
    return (
        <section className={style.wrapper}>
            <StatusHooks canStatusChange={canStatusChange} status={status} sendUpdateStatus={sendUpdateStatus}/>
            <div>
                <p>job</p>
                <p>info</p>
            </div>
            <div>contacts</div>
        </section>
    );
}

export default Additional;