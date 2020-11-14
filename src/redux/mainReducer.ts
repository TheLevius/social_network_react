import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}

const mainReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const initializeMain = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=> {
        dispatch(initializedSuccess());
    });

}

export default mainReducer;

