import {socket} from "../config";
import {addNewMessageType, initNewDataUserType, userDataArrayType, userDataType} from "./types";
import {newMessageSendType, newUserJoinType} from "../../store/middlewares/types";

export const chatAPI = {
    joinChat(newUser: newUserJoinType) {
        let {userName, setUserName} = newUser
        socket.emit('join', userName, setUserName)
    },
    getUserForChat(selfSetUserData: initNewDataUserType) {
        socket.on('self-user-data', selfSetUserData)
    },
    sendNewMessage(newMessageData: newMessageSendType) {
        let {userId, message, setMessageValue} = newMessageData
        socket.emit('client-new-message-sent', {userId, message}, () => setMessageValue(''))
    },
    subscribeToUpdateChat(
        newMessageSent: addNewMessageType,
        newUserJoin: userDataType,
        otherUsersInChat: userDataArrayType,
        userLeftFromChat: userDataType,
    ) {
        socket.on('new-message-sent', newMessageSent)
        socket.on('new-user-join', newUserJoin)
        socket.on('other-user-in-chat', otherUsersInChat)
        socket.on('user-left-from-chat', userLeftFromChat)
    },
    leftChat() {
        socket.emit('disconnect')
        socket.off()
    }
}