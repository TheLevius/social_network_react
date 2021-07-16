import React from 'react';
import styles from './Login.module.css';
import styles2 from '../common/FormsControls/FormsControls.module.css';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
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

export type LoginFormValuesType = {
    password: string
    email: string
    rememberMe: boolean
    captcha: string
}

type LoginFormPropertiesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = (props) => {
    const dispatch = useDispatch();
    const captchaUrl = useSelector<AppStateType, string | null>(state => state.auth.captchaUrl);
    const isAuth = useSelector<AppStateType, boolean>( state => state.auth.isAuth);

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }


    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return(
        <div className={styles._ProfileColumn}>
        <div className="Login block">
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
        </div>
    )
}