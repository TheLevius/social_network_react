import {profileAPI, usersAPI} from '../api/api';
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from '../types/reduxTypes';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

type InitialStateType = {
    postData: PostType[]
    profile: null | ProfileType
    status: null | string
    newPostText: null | string
}

let initialState:InitialStateType = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s, my first post', likesCount: 11},
        {id: 3, message: 'Hi, какой-то пост', likesCount: 15},
    ],
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
}

const profileReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
};

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: null | string
}
export const addPostActionCreator = (newPostText: string):AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId :number): DeletePostType => ({type: DELETE_POST, postId});

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile: profile});

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);

    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject({_error: response.data.messages[0]})
    }
}

export default profileReducer;

