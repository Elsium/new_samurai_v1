import React from 'react';
import style from './ContactItem.module.scss'

const ContactItem = ({contactTitle, contactLink}) => {
    return (
        <div className={style.contact}>
            <a target={`_blank`} href={'https://' + contactLink} className={style.contactTitle}>{contactTitle}</a>
        </div>
    )
}

export default ContactItem;