export type UserType = {
    userId: string
    userName: string
}

export type MessageType = UserType & {
    messageId: string
    message: string
    time: string
}

export type initialProjectsStateType = {
    users: UserType[]
    messages: MessageType[]
    userName: string
    userId: string
    isLogin: boolean
}