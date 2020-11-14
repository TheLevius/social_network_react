import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'socialNetwork/authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'socialNetwork/authReducer/GET_CAPTCHA_URL_SUCCESS';

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=93UN3T7IV3cTqrDYonkHiA%3D%3D" // if null, then captcha is not required
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

type SetAuthUserDataPayloadType = {
    email: string | null
    userId: number | null
    login: string | null
    isAuth: boolean | null
}

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (email: string | null, userId: number | null, login: string | null, isAuth: boolean | null): SetAuthUserDataType => {
    return ({type: SET_USER_DATA, payload: {email, userId, login, isAuth}});
};

type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: string
    }
}

export const getCaptchaUrlSuccess = (captchaUrl: string):getCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
        if(response.data.resultCode === 0) {
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;

