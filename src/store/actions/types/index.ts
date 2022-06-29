import {addNewMessage, addUser} from "../chat";

export type ActionsChatType =
    ReturnType<typeof addNewMessage>
    | ReturnType<typeof addUser>