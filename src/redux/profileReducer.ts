import {FormAction, stopSubmit} from 'redux-form';
import {PhotosType, ProfileType} from '../types/reduxTypes';
import {profileAPI} from '../api/profile-api';
import {ResultCodesEnum} from '../api/api';
import {BaseThunkType, InferActionsTypes} from './reduxStore';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s, my first post', likesCount: 11},
        {id: 3, message: 'Hi, какой-то пост', likesCount: 15},
    ],
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case 'SN/PROFILE/SET-STATUS': {
            return {
                ...state,
                status: action.status,
            };
        }
        case 'SN/PROFILE/DELETE-POST':
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            };
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SN/PROFILE/SAVE-PHOTO-SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
};



export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET-STATUS', status} as const),
    deletePost: (postId :number) => ({type: 'SN/PROFILE/DELETE-POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile: profile} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE-PHOTO-SUCCESS', photos} as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if(data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if(data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data));
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);

    if(data.resultCode === ResultCodesEnum.Success) {
        if(userId !== null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error(`UserId can't be null`)
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
        return Promise.reject({_error: data.messages[0]})
    }
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
