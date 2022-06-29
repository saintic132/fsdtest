import React, {useEffect} from 'react';
import style from "./style/Chat.module.scss";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";
import {socket} from "../../../common/Login/Login";
import ScrollableFeed from 'react-scrollable-feed';
import {useAppSelector} from "../../../store/selectors";
import {useDispatch} from "react-redux";
import {addNewMessage, addNewUser, addOtherUserInChatUser} from "../../../store/actions/chat";
import {MessageType, UserType} from "../../../store/reducers/types";

export const Chat = () => {

    const dispatch = useDispatch()
    const messageData = useAppSelector(state => state.chat.messages)
    const userId = useAppSelector(state => state.chat.userId)

    useEffect(() => {
        socket.on('new-message-sent', (message: MessageType) => {
            dispatch(addNewMessage(message))
        })

        socket.on('new-user-join', (dataUser: UserType) => {
            dispatch(addNewUser(dataUser))
        })

        socket.on('other-user-in-chat', (dataUser: UserType[]) => {
            if (dataUser.length !== 1) {
                dispatch(addOtherUserInChatUser(dataUser))
            }
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [dispatch])

    return (
        <div
            className={style.chat__body}
        >
            <ScrollableFeed>
                <ul>

                    {
                        messageData.map(message => {

                            const isUser = message.userId === userId

                            return (
                                <li
                                    className={style.chat__message_container}
                                    key={message.messageId}>
                                    <div className={finalClassName(style, 'chat__message_body', isUser)}>
                                        <img src={avatar} alt="avatar"/>
                                        <div className={finalClassName(style, 'chat__content', isUser)}>
                                            <div className={style.chat__messages_container}>
                                                <div className={style.chat__messages}>
                                                    <p>
                                                        {message.message}
                                                    </p>
                                                    <p className={finalClassName(style, 'chat__messages_time', isUser)}>
                                                        <i className="ri-time-line"/>
                                                        <span>{message.time}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={style.chat__username}>
                                                {message.userName}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </ScrollableFeed>

        </div>
    )
}