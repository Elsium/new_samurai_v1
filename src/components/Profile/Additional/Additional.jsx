import React from 'react';
import style from './Additional.module.scss'

const Additional = ({profile}) => {
    console.log(profile)
    return (
        <section className={style.wrapper}>
            <div>
                <p>about me</p>
            </div>
            <div>
                <p>job</p>
                <p>info</p>
            </div>
            <div>contacts</div>
        </section>
    );
}

export default Additional;