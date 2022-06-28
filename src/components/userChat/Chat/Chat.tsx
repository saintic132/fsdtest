import React from 'react';
import style from "./style/Chat.module.scss";
import {useAppSelector} from "../../../store/selectors";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";

export const Chat = () => {

    const messageData = useAppSelector(state => state.chat.messages)

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
                                    key={message.userId}>
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