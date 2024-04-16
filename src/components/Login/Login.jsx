import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.scss';
import {FormInput} from "../UI/FormInput/FormInput";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {setLogin} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form + ' ' + (props.error && style.serverError)}>
            <div className={style.input}>
                <Field component={FormInput} validate={[required]} placeholder={'Email'} name={'email'}
                       autoComplete={'username'}/>
                <p className={style.errorItem}>{props.error}</p>
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

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.setLogin(email, password, rememberMe);
    }

    if (props.isAuth) return <Navigate to={`/profile`}/>

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
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setLogin})(Login);