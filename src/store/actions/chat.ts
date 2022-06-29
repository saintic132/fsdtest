import {CHAT} from "../enums/Chat";
import {MessageType, UserType} from "../reducers/types";

export const addNewMessage = (message: MessageType) => ({
    type: CHAT.ADD_NEW_MESSAGE,
    message
} as const)
export const addUser = (dataUser: UserType) => ({
    type: CHAT.ADD_USER,
    dataUser
} as const)
export const addNewUser = (dataUser: UserType) => ({
    type: CHAT.ADD_NEW_USER,
    dataUser
} as const)
export const addOtherUserInChatUser = (dataUser: UserType[]) => ({
    type: CHAT.ADD_OTHER_USERS_IN_CHAT,
    dataUser
} as const)
