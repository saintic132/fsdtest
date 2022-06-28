export type UserType = {
    id: number
    name: string
}

export type MessageType = {
    userId: number
    messageId: number
    name: string
    message: string
    time: string
}

export type initialProjectsStateType = {
    users: UserType[]
    messages: MessageType[]
    userName: string
    userId: number
}