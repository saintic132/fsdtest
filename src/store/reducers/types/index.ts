export type UserType = {
    userId: number
    name: string
}

export type MessageType = UserType & {
    messageId: number
    message: string
    time: string
}

export type initialProjectsStateType = {
    users: UserType[]
    messages: MessageType[]
    userName: string
    userId: number
    isLogin: boolean
}