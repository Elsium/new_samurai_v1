import React from 'react';
import style from './Additional.module.scss'
import Status from "./Status/Status";

const Additional = () => {
    return (
        <section className={style.wrapper}>
            <Status status={"hello"}/>
            <div>
                <p>job</p>
                <p>info</p>
            </div>
            <div>contacts</div>
        </section>
    );
}

export default Additional;