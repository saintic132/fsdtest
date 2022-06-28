import React from 'react';
import style from "./style/Chat.module.scss";
import {useAppSelector} from "../../../store/selectors";
import avatar from '../../../assets/img/avatar/user.png'
import {finalClassName} from "../../../utils/finalClassName";

type ChatPropsType = {}

export const Chat = (props: ChatPropsType) => {

    const usersData = useAppSelector(state => state.chat.users)

    return (
        <div className={style.chat__body}>

            <ul>
                {
                    usersData.map(user => {

                        const isUser = user.id === 1

                        const message_body = isUser
                            ? `${style.chat__message_body} ${style.chat__message_body_right}`
                            : style.chat__message_body

                        const chat__content = isUser
                            ? `${style.chat__content} ${style.chat__content_right}`
                            : style.chat__content

                        const chat__messages_time = isUser
                            ? `${style.chat__messages_time} ${style.chat__messages_time_right}`
                            : style.chat__messages_time

                        // finalClassName(style.chat__message_body, isUser)

                        return (
                            <li
                                className={style.chat__message_container}
                                key={user.id}>
                                <div className={message_body}>
                                    <img src={avatar} alt="avatar"/>
                                    <div className={chat__content}>
                                        <div className={style.chat__messages_container}>
                                            <div className={style.chat__messages}>
                                                <p>
                                                    {user.message}
                                                </p>
                                                <p className={chat__messages_time}>
                                                    Time here
                                                </p>
                                            </div>
                                        </div>
                                        <div className={style.chat__username}>
                                            {user.name}
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