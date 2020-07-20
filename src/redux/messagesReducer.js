
const SEND_MESSAGE = 'SEND_MESSAGE';

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

const messagesReducer = (state = initialState, action) => {
    let stateCopy;
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

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default messagesReducer;