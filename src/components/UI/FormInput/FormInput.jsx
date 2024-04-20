import React from 'react';
import style from './FormInput.module.scss'
import classNames from "classnames";
export const FormInput = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={classNames(style.formInput, {[style.error]: hasError})}>
            <input {...input} {...props}/>
            {hasError && <p>{error}</p>}
        </div>
    );
};