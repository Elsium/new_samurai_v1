import React from 'react';
import style from './FormInput.module.scss'
export const FormInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formInput + ' ' + (hasError && style.error)}>
            <input {...input} {...props}/>
            {hasError && <p>{meta.error}</p>}
        </div>
    );
};