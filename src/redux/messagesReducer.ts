import {InferActionsTypes} from './reduxStore';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
    isSelf: boolean
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Vladimir'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Sergey'},
    ] as DialogType[],
    messagesData: [
        {id: 1, message: 'Hi', isSelf: false},
        {id: 2, message: 'How is your it-kamasutra?', isSelf: true},
        {id: 3, message: 'Yo', isSelf: false},
        {id: 4, message: 'Hi', isSelf: true},
        {id: 5, message: 'Hi', isSelf: false},
        {id: 6, message: 'Hi', isSelf: true},
        {id: 6, message: 'dfsdf', isSelf: false},
        {id: 6, message: 'Hi', isSelf: true},
    ] as MessageType[],
};

const messagesReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {

        case 'SN/MESSAGES/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body, isSelf: true}]
            };
        default:
            return state;
    }
};

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/MESSAGES/SEND_MESSAGE', newMessageBody} as const),
}


export default messagesReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>