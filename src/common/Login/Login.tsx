import React, {useEffect, useState} from 'react';
import style from './style/Login.module.scss'
import {io} from "socket.io-client";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/actions/chat";
import {UserType} from "../../store/reducers/types";

const ENDPOINT = 'http://localhost:5000/'
// const ENDPOINT = 'https://fsdback.herokuapp.com/'
export let socket = io(ENDPOINT)

export const Login = () => {

    const dispatch = useDispatch()

    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        socket.on('self-user-data', (dataUser: UserType) => {
            dispatch(addUser(dataUser))
        })
    }, [dispatch])

    const newUserNameHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (userName.trim()) {
            socket.emit('join', userName, () => setUserName(''))
        }
    }

    const onKeyPressEnterName = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (userName.trim()) {
            if (e.key === 'Enter') {
                e.preventDefault()
                socket.emit('join', userName, () => setUserName(''))
            }
        }
    }

    return (
        <div className={style.login__container}>
            <h2>Enter your name</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                onKeyPress={onKeyPressEnterName}
                placeholder='Enter name...'
            />
            <button
                tabIndex={0}
                onClick={newUserNameHandle}
            >
                Enter
            </button>
        </div>
    )
}