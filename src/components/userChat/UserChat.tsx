import React from 'react';
import style from './style/UserChat.module.scss'
import {Chat} from "./Chat/Chat";
import {InputMessage} from './InputMessage/InputMessage';

export const UserChat = () => {
    return (
        <div className={style.userchat__container}>
            <div className={style.userchat__body}>
                <div className={style.userchat__header}>
                    HEADER
                </div>

                <Chat/>

                <InputMessage/>

            </div>
        </div>
    )
}