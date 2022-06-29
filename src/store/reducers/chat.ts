import {initialProjectsStateType} from "./types";
import {ActionsChatType} from "../actions/types";
import {CHAT} from "../enums/Chat";

const initialProjectsState: initialProjectsStateType = {
    users: [],
    messages: [],
    userName: '',
    userId: '',
    isLogin: false
}

export const chatReducer = (state: initialProjectsStateType = initialProjectsState, action: ActionsChatType): initialProjectsStateType => {
    switch (action.type) {
        case CHAT.ADD_USER: {
            return {...state, users: [...state.users, action.dataUser], ...action.dataUser, isLogin: true}
        }
        case CHAT.ADD_NEW_USER: {
            return {...state, users: [...state.users, action.dataUser]}
        }
        case CHAT.ADD_OTHER_USERS_IN_CHAT: {
            return {...state, users: [...action.dataUser]}
        }
        case CHAT.DELETE_USER_FROM_CHAT: {
            return {...state, users: state.users.filter(user => user.userId !== action.userId)}
        }
        case CHAT.ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        }
        default:
            return state
    }
}