import React, {useEffect} from 'react';
import style from "./style/Chat.module.scss";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";
import ScrollableFeed from 'react-scrollable-feed';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppSelector} from "../../../store/selectors";
import {useAppDispatch} from "../../../store/types";
import {chatUpdate, leftFromChat} from "../../../store/middlewares/joinChat";

export const Chat = () => {

    const dispatch = useAppDispatch()
    const messageData = useAppSelector(state => state.chat.messages)
    const userId = useAppSelector(state => state.chat.userId)

    const toastNewMemberJoin = (userName: string) => {
        return toast.info(`${userName} joined.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const toastNewMemberLeft = (userName: string) => {
        return toast.error(`${userName} left chat.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    useEffect(() => {
        dispatch(chatUpdate({toastNewMemberJoin, toastNewMemberLeft}))

        return () => {
            dispatch(leftFromChat())
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