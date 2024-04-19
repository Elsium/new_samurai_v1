import React from 'react';
import style from './ContactFormItem.module.scss'
import {Field} from "redux-form";

const ContactFormItem = ({contactTitle, contactLink}) => {
    return (
        <div className={style.contact}>
            <Field component={'input'} validate={[]} name={'contacts.' + contactTitle} placeholder={contactTitle}/>
        </div>
    )
}

export default ContactFormItem;