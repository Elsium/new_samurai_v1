import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.scss';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.input}>
                <Field component={'input'} placeholder={'Login'} name={'login'}/>
            </div>
            <div className={style.input}>
                <Field component={'input'} placeholder={'Password'} name={'password'}/>
            </div>
            <div className={style.checkbox}>
                <label>
                    <Field component={'input'} type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/> <p style={{marginLeft: '10px', userSelect: 'none'}}>RememberMe</p>
                </label>
            </div>
            <div className={style.btn}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div className={style.info}>
                <h2>Info</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consectetur facilis laboriosam modi vel velit voluptates voluptatum. At dicta excepturi inventore reiciendis sint. Consequuntur delectus esse iste itaque sequi?</p>
            </div>
        </div>
    );
};

export default Login;