import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.scss';
import {FormInput} from "../UI/FormInput/FormInput";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {sendLogin} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {getAuth} from "../../redux/authSelectors";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form + ' ' + (error && style.serverError)}>
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
                    <Field component={FormInput} type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/> <p
                    style={{marginLeft: '10px', userSelect: 'none'}}>RememberMe</p>
                </label>
            </div>
            <div className={style.btn}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({sendLogin, isAuth}) => {
    const onSubmit = ({email, password, rememberMe}) => {
        sendLogin(email, password, rememberMe);
    }

    if (isAuth) return <Navigate to={`/profile`}/>

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div className={style.info}>
                <h2>Info</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consectetur facilis
                    laboriosam modi vel velit voluptates voluptatum. At dicta excepturi inventore reiciendis sint.
                    Consequuntur delectus esse iste itaque sequi?</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getAuth(state)
})

export default connect(mapStateToProps, {sendLogin})(Login);