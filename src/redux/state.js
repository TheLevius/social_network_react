const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s, my first post', likesCount: 11},
                {id: 3, message: 'Hi, какой-то пост', likesCount: 15},
            ],
            newPostText: 'it-incubator'
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    _addPost(postMessage) {
        let newPost = {id: 5, message: postMessage, likesCount: 0};
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)

    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer publisher-subscriber addEventListener
    },

    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            this._addPost(this._state.profilePage.newPostText);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id: 6, message: body, isSelf: true});
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
};

window.store = store;
export default store;
