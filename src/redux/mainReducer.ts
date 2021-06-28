import {getAuthUserData} from "./authReducer";
import {InferActionsTypes} from './reduxStore';

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>

const mainReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/MAIN/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const actions = {
    initializedSuccess: () => ({type: 'SN/MAIN/INITIALIZED_SUCCESS'} as const),
}

export const initializeMain = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=> {
        dispatch(actions.initializedSuccess());
    });

}

export default mainReducer;

