
const SEND_MESSAGE = 'SEND_MESSAGE';

type CollocutorType = {
    id: null | number
    name: null | string
}

type MessageDataType = {
    id: null | number
    message: null | string
    isSelf: boolean
}

type InitialStateType = {
    dialogsData: Array<CollocutorType>
    messagesData: Array<MessageDataType>
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Vladimir'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Sergey'},
    ],
    messagesData: [
        {id: 1, message: 'Hi', isSelf: false},
        {id: 2, message: 'How is your it-kamasutra?', isSelf: true},
        {id: 3, message: 'Yo', isSelf: false},
        {id: 4, message: 'Hi', isSelf: true},
        {id: 5, message: 'Hi', isSelf: false},
        {id: 6, message: 'Hi', isSelf: true},
        {id: 6, message: 'dfsdf', isSelf: false},
        {id: 6, message: 'Hi', isSelf: true},
    ]
};

const messagesReducer = (state: InitialStateType = initialState, action: any):InitialStateType => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body, isSelf: true}]
            };
        default:
            return state;
    }
};

type SendMessageCreatorType = (newMessageBody: string) => ({type: typeof SEND_MESSAGE, newMessageBody: string})

export const sendMessageCreator: SendMessageCreatorType = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default messagesReducer;