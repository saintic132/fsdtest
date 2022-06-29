import {CHAT} from "../enums/Projects";

export const addNewMessage = (userId: number, name: string, message: string) => ({
    type: CHAT.ADD_NEW_MESSAGE,
    payload: {userId, name, message}
} as const)
export const addUser = (userId: number, name: string) => ({
    type: CHAT.ADD_USER,
    payload: {userId, name}
} as const)