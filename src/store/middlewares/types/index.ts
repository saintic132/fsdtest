export type ToastPushNotificationType = {
    toastNewMemberJoin: (userName: string) => void
    toastNewMemberLeft: (userName: string) => void
}

export type newUserJoinType = {
    userName: string
    setUserName: (name: string) => void
}

export type newMessageSendType = {
    userId: string
    message: string
    setMessageValue: (value: string) => void
}