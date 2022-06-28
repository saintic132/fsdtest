import React, {useState} from 'react';
import style from "./style/InputMessage.module.scss";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../store/selectors";
import {addNewMessage} from "../../../store/actions/chat";

export const InputMessage = () => {

    const dispatch = useDispatch()
    const userName = useAppSelector(state => state.chat.userName)
    const userId = useAppSelector(state => state.chat.userId)

    const [messageValue, setMessageValue] = useState<string>('');

    const handleChangeMessageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageValue(e.currentTarget.value)
    }

    const onKeyPressEnterMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (messageValue.trim()) {
            if (e.key === 'Enter') {
                dispatch(addNewMessage(userId, userName, messageValue))
                setMessageValue('')
            }
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
            <button>send</button>

        </div>
    )
}