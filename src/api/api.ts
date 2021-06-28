import axios from 'axios';
import { UserType } from '../types/reduxTypes';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '83ff2ca7-a319-4045-8f15-c83797dc9c95'},
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: string[]
    resultCode: RC
}