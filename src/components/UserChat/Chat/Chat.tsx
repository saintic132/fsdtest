import React, {useEffect, useState} from 'react';
import style from "./style/Chat.module.scss";
import {useAppSelector} from "../../../store/selectors";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";
import {io} from "socket.io-client";
import {MessageType} from "../../../store/reducers/types";
import {socket} from "../../../common/Login/Login";


export const Chat = () => {

    // const messageData = useAppSelector(state => state.chat.messages)
    let time = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});
    const [messageData, setMessageData] = useState<MessageType[]>([
        {userId: 1, messageId: 1, name: 'Patrick', message: 'Hello world asd asd a', time: time},
        {userId: 2, messageId: 2, name: 'Liza', message: 'Hello world asd asd a', time: time},
        {userId: 3, messageId: 3, name: 'Milla', message: 'Hello world asd asd a', time: time},
    ]);

    useEffect(() => {
        socket.on('new-message-sent', (message) => {
            setMessageData(prevState => [...prevState, message])
        })
        // return () => {
        //     socket.emit('disconnect')
        //     socket.off()
        // }

    }, [])

    return (
        <div
            className={style.chat__body}
        >

            <ul>
                {
                    messageData.map(message => {

                        const isUser = message.userId === 1

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
                                            {message.name}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}