import {MessageType, UserType} from "../../../store/reducers/types";

export type initNewDataUserType = (newUser: UserType) => void
export type addNewMessageType = (message: MessageType) => void
export type userDataType = (dataUser: UserType) => void
export type userDataArrayType = (dataUser: UserType[]) => void