import {addNewMessage, addNewUser, addOtherUserInChatUser, addUser} from "../chat";

export type ActionsChatType =
    ReturnType<typeof addNewMessage>
    | ReturnType<typeof addUser>
    | ReturnType<typeof addNewUser>
    | ReturnType<typeof addOtherUserInChatUser>