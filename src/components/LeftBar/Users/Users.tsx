import React from 'react';
import style from './style/Users.module.scss'
import {useAppSelector} from "../../../store/selectors";
import ScrollableFeed from 'react-scrollable-feed';
import avatarLogo from '../../../assets/img/avatar/user.png'

export const Users = () => {

    const users = useAppSelector(state => state.chat.users)

    return (
        <div className={style.users__container}>
            <ScrollableFeed>
                <ul>
                    {
                        users.map(user => {
                            return (
                                <li key={user.userId}>
                                    <div className={style.users__user}>
                                        <img src={avatarLogo} alt="avatar"/>
                                        <div>{user.userName}</div>
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