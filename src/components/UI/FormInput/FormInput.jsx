import React from 'react';
import style from './FormInput.module.scss'
export const FormInput = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.formInput + ' ' + (hasError && style.error)}>
            <input {...input} {...props}/>
            {hasError && <p>{error}</p>}
        </div>
    );
};