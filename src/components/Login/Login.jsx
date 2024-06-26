import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.scss';
import {FormInput} from "../UI/FormInput/FormInput";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {sendLogin} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {getAuth, getCaptchaURL} from "../../redux/authSelectors";
import classNames from "classnames";

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit} className={classNames(style.form, {[style.serverError]: error})}>
            <div className={style.input}>
                <Field component={FormInput} validate={[required]} placeholder={'Email'} name={'email'}
                       autoComplete={'username'}/>
                <p className={style.errorItem}>{error}</p>
            </div>
            <div className={style.input}>
                <Field component={FormInput} validate={[required]} type={'password'} placeholder={'Password'}
                       name={'password'} autoComplete={'current-password'}/>
            </div>
            <div className={style.checkbox}>
                <label>
                    <Field component={FormInput} type={'checkbox'} name={'rememberMe'}/> <p
                    style={{marginLeft: '10px', userSelect: 'none'}}>RememberMe</p>
                </label>
            </div>
            { captchaURL && <div className={style.captcha}>
                <img src={captchaURL} alt=""/>
                <Field component={FormInput} validate={[required]} name={'captcha'}/>
            </div>}
            <div className={style.btn}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({sendLogin, isAuth, captchaURL}) => {
    const onSubmit = ({email, password, rememberMe, captcha}) => {
        sendLogin(email, password, rememberMe, captcha);
    }

    if (isAuth) return <Navigate to={`/profile`}/>

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            <div className={style.info}>
                <h2>Info</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getAuth(state),
    captchaURL: getCaptchaURL(state),
})

export default connect(mapStateToProps, {sendLogin})(Login);