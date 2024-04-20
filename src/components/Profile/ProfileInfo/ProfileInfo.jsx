import React from 'react';
import style from './ProfileInfo.module.scss'
import ContactItem from "./ContactItem/ContactItem";

const ProfileInfo = ({profile: {aboutMe, contacts, lookingForAJob, lookingForAJobDescription}}) => {
    return (
        <section className={style.wrapper}>
            <div className={style.aboutMe}>
                <p>About me</p>
                <p>{aboutMe}</p>
            </div>
            <div className={style.line}/>
            <div className={style.job}>
                <p>lookingForAJob: <span>{lookingForAJob ? 'yes' : 'no'}</span></p>
                {lookingForAJob && <p>lookingForAJobDescription: <span>{lookingForAJobDescription}</span></p>}
            </div>
            <div className={style.line}/>
            <div className={style.social}>
                {Object.keys(contacts)
                    .map(key => contacts[key]
                        ? <ContactItem key={key} contactTitle={key} contactLink={contacts[key]}/>
                        : '')}
            </div>
        </section>
    );
}

export default ProfileInfo;