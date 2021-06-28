import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from './api';

type MeResponseData = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseData>>(`auth/me`)
            .then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}