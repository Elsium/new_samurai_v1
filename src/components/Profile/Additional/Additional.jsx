import React from 'react';
import style from './Additional.module.scss'

const Additional = () => {
    return (
        <section className={style.wrapper}>
            <div>status</div>
            <div>
                <p>job</p>
                <p>info</p>
            </div>
            <div>contacts</div>
        </section>
    );
}

export default Additional;