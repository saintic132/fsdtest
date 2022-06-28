import React from 'react';
import style from './style/LeftSideBar.module.scss'
import {Users} from "./Users/Users";

export const LeftBar = () => {
    return (
        <div className={style.leftbar__container}>
            <div className={style.leftbar__body}>
                <h4>Chat</h4>
                <p>Members</p>

                <Users />

            </div>
        </div>
    )
}