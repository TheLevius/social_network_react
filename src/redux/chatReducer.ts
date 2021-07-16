import {FormAction} from 'redux-form';
import {BaseThunkType, InferActionsTypes} from './reduxStore';
import {chatAPI, ChatMessageUnitAPIType, StatusType} from '../api/chat-api';
import {Dispatch} from 'redux';
import {v1} from 'uuid';

export type ChatMessageWithIdType = ChatMessageUnitAPIType & {id: string}

let initialState = {
    messages: [] as ChatMessageWithIdType[],
    status: 'pending' as StatusType
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/CHAT/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages
                        .map( (m) => ( {...m, id: v1()} ))
                ].filter((m, i, array) => (
                    i >= array.length - 100
                ))
            }
         case 'SN/CHAT/STATUS_CHANGED':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

const actions = {
    messagesReceived: (messages: ChatMessageUnitAPIType[]) => {
        return ({type: 'SN/CHAT/MESSAGES_RECEIVED', payload: {messages} } as const);
    },
    statusChanged: (status: StatusType) => {
        return ({type: 'SN/CHAT/STATUS_CHANGED', payload: {status} } as const);
    }

}

let _newMessagesHandle: ( (messages: ChatMessageUnitAPIType[]) => void) | null = null;
const newMessagesHandleCreator = (dispatch: Dispatch) => {
    if (_newMessagesHandle === null) {
        _newMessagesHandle = (messages: ChatMessageUnitAPIType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessagesHandle
}
let _statusChangedHandle: ( (status: StatusType) => void) | null = null;
const statusChangedHandleCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandle === null) {
        _statusChangedHandle = (status: StatusType) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandle
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessagesHandleCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandleCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessagesHandleCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandleCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>