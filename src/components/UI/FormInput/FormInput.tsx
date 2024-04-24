import React from 'react';
import style from './FormInput.module.scss'
import classNames from "classnames";

type PropsType = {
    input: any,
    meta: {touched: any, error: any},
    props: any
}

export const FormInput = ({input, meta: {touched, error}, ...props}: PropsType) => {
    const hasError = touched && error;
    return (
        <div className={classNames(style.formInput, {[style.error]: hasError})}>
            <input {...input} {...props}/>
            {hasError && <p>{error}</p>}
        </div>
    );
};