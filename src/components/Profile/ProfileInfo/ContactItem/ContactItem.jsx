import React from 'react';
import style from './ContactItem.module.scss'

const ContactItem = ({contactTitle, contactLink}) => {
    if (!contactLink) return <div/>
    return (
        <div className={style.contact}>
            <a target={`_blank`} href={'https://' + contactLink} className={style.contactTitle}>{contactTitle}</a>
        </div>
    )
}

export default ContactItem;