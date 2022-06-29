import React, {useEffect, useState} from 'react';
import style from './Login.module.scss'
import {io} from "socket.io-client";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/actions/chat";

// const ENDPOINT = 'http://localhost:5000/'
const ENDPOINT = 'https://fsdback.herokuapp.com/'
export let socket = io(ENDPOINT)

export const Login = () => {

    const dispatch = useDispatch()

    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        socket.on('message', (message: any) => {
            dispatch(addUser(message.id, userName))
            console.log((message.text))
        })


    }, [])

    const send = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (userName) {
            socket.emit('join', userName, () => setUserName(''))
        }
    }

    return (
        <div className={style.login__container}>
            <h2>Enter your name</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                placeholder='Enter name...'
            />
            <button
                onClick={send}
            >
                Enter
            </button>
        </div>
    )
}