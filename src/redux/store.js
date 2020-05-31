import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

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

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer publisher-subscriber addEventListener
    },

    dispatch(action) {  // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}





window.store = store;
export default store;
