import {ResultCodeForCaptchaEnum, ResultCodesEnum} from '../api/api';
import {FormAction, stopSubmit} from 'redux-form';
import {authAPI} from '../api/auth-api';
import {securityAPI} from '../api/security-api';
import {BaseThunkType, InferActionsTypes} from './reduxStore';

const SET_USER_DATA = 'SN/AUTH/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    email: null as string | null,
    userId: null as (number | null),
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null, // if null, then captcha is not required
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

const actions = {
    setAuthUserData: (email: string | null, userId: number | null, login: string | null, isAuth: boolean) => {
        return ({type: 'SN/AUTH/SET_USER_DATA', payload: {email, userId, login, isAuth}} as const);
    },
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),

}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
        if(meData.resultCode === ResultCodesEnum.Success) {
            let {email, id, login} = meData.data;
            dispatch(actions.setAuthUserData(email, id, login, true));
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
        if(data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if(data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
        if(data.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }
}

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>