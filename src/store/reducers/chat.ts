import {initialProjectsStateType} from "./types";
import {ActionsChatType} from "../actions/types";
import {CHAT} from "../enums/Projects";

const time = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});

const initialProjectsState: initialProjectsStateType = {
    users: [
        {id: 1, name: 'Patrick'},
        {id: 2, name: 'Hanna'},
        {id: 3, name: 'Petr'}
    ],
    messages: [
        {userId: 1, messageId: 1, name: 'Patrick', message: 'Hello world asd asd a', time: time},
        {userId: 2, messageId: 2, name: 'Liza', message: 'Hello world asd asd a', time: time},
        {userId: 3, messageId: 3, name: 'Milla', message: 'Hello world asd asd a', time: time},
    ],
    // messages: {
    //     '1' : [
    //         {id: 1, name: 'Patrick', message: 'Hello world asd asd a'},
    //         {id: 2, name: 'Patrick', message: 'Lolitaasd asd asd asd'},
    //         {id: 3, name: 'Patrick', message: 'Picasso asd asd as da'}
    //     ]
    // },
    userName: 'Patrick',
    userId: 1
}

export const chatReducer = (state: initialProjectsStateType = initialProjectsState, action: ActionsChatType): initialProjectsStateType => {
    switch (action.type) {
        case CHAT.ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {messageId: 4, time: time, ...action.payload}]
            }
        }
        default:
            return state
    }
}