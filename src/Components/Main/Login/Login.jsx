import React from 'react';
import styles from './Login.module.css';
import styles2 from './../common/FormsControls/FormsControls.module.css';
import {Field, reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [required], Input, {type: 'checkbox'}, 'Remember Me')}
            { error && <div className={styles2.formSummaryError}>
                {error}
            </div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {

        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className="Login block">
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);