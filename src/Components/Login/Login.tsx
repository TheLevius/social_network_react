import React from 'react';
import styles from './Login.module.css';
import styles2 from '../common/FormsControls/FormsControls.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from '../../redux/reduxStore';

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormPropertiesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormPropertiesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormPropertiesTypeKeys>(undefined, 'rememberMe', [required], Input, {type: 'checkbox'}, 'Remember Me')}
            {captchaUrl && <img src={captchaUrl} className={styles.imgCaptcha}/> }
            {captchaUrl && createField<LoginFormPropertiesTypeKeys>('symbols from image', 'captcha', [required], Input, {}) }
            { error && <div className={styles2.formSummaryError}>
                {error}
            </div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'}) (LoginForm);

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}

export type LoginFormValuesType = {
    password: string
    email: string
    rememberMe: boolean
    captcha: string
}

type LoginFormPropertiesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className="Login block">
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login}) (Login);