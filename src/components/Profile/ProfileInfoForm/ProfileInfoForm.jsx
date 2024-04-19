import React from 'react';
import style from './ProfileInfoForm.module.scss'
import {Field, reduxForm} from "redux-form";
import ContactFormItem from "./ContactFormItem/ContactItem";

const ProfileInfoForm = ({handleSubmit, contacts, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <div className={style.aboutMe}>
                <label>
                    <p>My Name</p>
                    <Field component={'input'} validate={[]} placeholder={'Your name...'} name={'fullName'}/>
                </label>
                <br/>
                <label>
                    <p>About me</p>
                    <Field component={'textarea'} validate={[]} placeholder={'About you...'} name={'aboutMe'}/>
                </label>
                <button className={style.btn}>save</button>
            </div>
            <div className={style.line}/>
            <div className={style.job}>
                <label>
                    <p>lookingForAJob: <Field component={'input'} type={'checkbox'} validate={[]} name={'lookingForAJob'}/></p>
                </label>
                <br/>
                <label>
                    <p>lookingForAJobDescription: <Field component={'textarea'} validate={[]} placeholder={'Your skills...'} name={'lookingForAJobDescription'}/></p>
                </label>
            </div>
            <div className={style.line}/>
            <div className={style.social}>{Object.keys(contacts).map(key => <ContactFormItem key={key} contactTitle={key} contactLink={contacts[key]}/>)}</div>
        </form>
    );
}

const ProfileInfoReduxForm = reduxForm({form: 'profileEdit', enableReinitialize : true})(ProfileInfoForm)

export default ProfileInfoReduxForm;