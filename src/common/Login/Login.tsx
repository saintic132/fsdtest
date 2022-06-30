import React, {useEffect, useState} from 'react';
import style from './style/Login.module.scss'
import {useAppDispatch} from "../../store/types";
import { getSelfUser, joinToChat } from '../../store/middlewares';

export const Login = () => {

    const dispatch = useAppDispatch()

    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        dispatch(getSelfUser())
    }, [dispatch])

    const newUserNameHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (userName.trim()) {
            dispatch(joinToChat({userName, setUserName}))
        }
    }

    const onKeyPressEnterName = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (userName.trim()) {
            if (e.key === 'Enter') {
                e.preventDefault()
                dispatch(joinToChat({userName, setUserName}))
            }
        }
    }

    return (
        <div className={style.login__container}>
            <h2>Enter your name</h2>
            <input
                type="text"
                tabIndex={0}
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                onKeyPress={onKeyPressEnterName}
                placeholder='Enter name...'
            />
            <button
                onClick={newUserNameHandle}
            >
                Enter
            </button>
        </div>
    )
}