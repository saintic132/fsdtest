import React, {useState} from 'react';
import style from "./style/InputMessage.module.scss";
import {useAppSelector} from "../../../store/selectors";
import {socket} from "../../../common/Login/Login";

export const InputMessage = () => {

    const userId = useAppSelector(state => state.chat.userId)

    const [messageValue, setMessageValue] = useState<string>('');

    const handleChangeMessageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageValue(e.currentTarget.value)
    }

    const onKeyPressEnterMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (messageValue.trim()) {
            if (e.key === 'Enter') {
                e.preventDefault()
                socket.emit('client-new-message-sent', {id: userId, message: messageValue}, () => setMessageValue(''))
            }
        }
    }

    const newMessageHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (messageValue.trim()) {
            e.preventDefault()
            socket.emit('client-new-message-sent', {id: userId, message: messageValue}, () => setMessageValue(''))
        }
    }

    return (
        <div className={style.message__body}>

            <input
                type="text"
                tabIndex={0}
                value={messageValue}
                onChange={handleChangeMessageValue}
                onKeyPress={onKeyPressEnterMessage}
                placeholder='Enter Message...'
            />
            <button
                onClick={newMessageHandle}
            >
                <i className="ri-send-plane-fill"/>
            </button>

        </div>
    )
}