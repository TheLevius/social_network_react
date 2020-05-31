const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body, isSelf: true});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
};

export default messagesReducer;