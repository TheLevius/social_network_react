import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'socialNetwork/authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'socialNetwork/authReducer/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=93UN3T7IV3cTqrDYonkHiA%3D%3D" // if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, payload: {email, userId, login, isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
        if(response.data.resultCode === 0) {
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
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

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;

