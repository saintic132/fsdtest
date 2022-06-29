import React, {useEffect} from 'react';
import style from "./style/Chat.module.scss";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";
import {socket} from "../../../common/Login/Login";
import ScrollableFeed from 'react-scrollable-feed';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppSelector} from "../../../store/selectors";
import {useDispatch} from "react-redux";
import {addNewMessage, addNewUser, addOtherUserInChatUser, deleteUserFromChat} from "../../../store/actions/chat";
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
            dispatch(addNewUser(dataUser)) &&
            (function () {
                return toast.info(`${dataUser.userName} joined.`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })()
        })

        socket.on('other-user-in-chat', (dataUser: UserType[]) => {
            if (dataUser.length !== 1) {
                dispatch(addOtherUserInChatUser(dataUser))
            }
        })

        socket.on('user-left-from-chat', (dataUser: UserType) => {
            dispatch(deleteUserFromChat(dataUser.userId)) &&
            (function () {
                return toast.error(`${dataUser.userName} left.`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })()
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
            <ToastContainer/>
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