import React, {useEffect} from 'react';
import style from './Main.module.scss'
import {LeftBar} from "./LeftBar/LeftBar";
import {UserChat} from "./UserChat/UserChat";
import {Login} from "../common/Login/Login";
import {useAppSelector} from "../store/selectors";


function Main() {

    // const isLogin = useAppSelector(state => state.chat.isLogin)
    const isLogin = true

    return (
        <div className={style.wrapper}>

            {
                isLogin
                    ? <>
                        <LeftBar/>
                        <UserChat/>
                    </>
                    : <Login/>
            }

        </div>
    );
}

export default Main;
