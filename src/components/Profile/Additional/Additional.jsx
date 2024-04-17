import React from 'react';
import style from './Additional.module.scss'
import Status from "./Status/Status";

const Additional = (props) => {
    return (
        <section className={style.wrapper}>
            <Status canStatusChange={props.canStatusChange} status={props.status} sendUpdateStatus={props.sendUpdateStatus}/>
            <div>
                <p>job</p>
                <p>info</p>
            </div>
            <div>contacts</div>
        </section>
    );
}

export default Additional;