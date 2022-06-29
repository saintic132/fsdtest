import {initialProjectsStateType} from "./types";
import {ActionsChatType} from "../actions/types";
import {CHAT} from "../enums/Projects";

let time = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});
const initialProjectsState: initialProjectsStateType = {
    users: [
        {userId: 1, name: 'Patrick'},
        {userId: 2, name: 'Hanna'},
        {userId: 3, name: 'Petr'}
    ],
    messages: [
        {userId: 1, messageId: 1, name: 'Patrick', message: 'Hello world asd asd a', time: time},
        {userId: 2, messageId: 2, name: 'Liza', message: 'Hello world asd asd a', time: time},
        {userId: 3, messageId: 3, name: 'Milla', message: 'Hello world asd asd a', time: time},
    ],
    userName: 'Patrick',
    userId: 1,
    isLogin: false
}

export const chatReducer = (state: initialProjectsStateType = initialProjectsState, action: ActionsChatType): initialProjectsStateType => {
    switch (action.type) {
        case CHAT.ADD_USER: {
            return {...state, ...action.payload, isLogin: true}
        }
        case CHAT.ADD_NEW_MESSAGE: {
            let newTime = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});
            return {
                ...state,
                messages: [...state.messages, {messageId: 4, time: newTime, ...action.payload}]
            }
        }
        default:
            return state
    }
}