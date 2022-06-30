import {chatAPI} from "../../api";
import {MessageType, UserType} from "../reducers/types";
import {ThunksDispatch} from "../types";
import {addNewMessage, addNewUser, addOtherUserInChatUser, addUser, deleteUserFromChat} from "../actions/chat";
import {newMessageSendType, newUserJoinType, ToastPushNotificationType} from "./types";

export const joinToChat = (newUser: newUserJoinType) => () => {
    chatAPI.joinChat(newUser)
}

export const getSelfUser = () => (dispatch: ThunksDispatch) => {
    chatAPI.getUserForChat((dataUser: UserType) => {
        dispatch(addUser(dataUser))
    })
}

export const newMessagesSend = (newMessageData: newMessageSendType) => () => {
    chatAPI.sendNewMessage(newMessageData)
}

export const chatUpdate = (toastNotifications: ToastPushNotificationType) => (dispatch: ThunksDispatch) => {
    chatAPI.subscribeToUpdateChat(
        (message: MessageType) => {
            dispatch(addNewMessage(message))
        },
        (userData: UserType) => {
            dispatch(addNewUser(userData))
            toastNotifications.toastNewMemberJoin(userData.userName)
        },
        (userDataArray: UserType[]) => {
            if (userDataArray.length !== 1) {
                dispatch(addOtherUserInChatUser(userDataArray))
            }
        },
        (userData: UserType) => {
            dispatch(deleteUserFromChat(userData.userId))
            toastNotifications.toastNewMemberLeft(userData.userName)
        }
    )
}

export const leftFromChat = () => () => {
    chatAPI.leftChat()
}