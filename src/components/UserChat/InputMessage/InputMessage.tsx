import React, {useState} from 'react';
import style from "./style/InputMessage.module.scss";
import smiles from '../../../assets/img/smiles/smile.png'
import Picker, {IEmojiData} from 'emoji-picker-react';
import {useAppSelector} from "../../../store/selectors";
import {newMessagesSend} from "../../../store/middlewares/joinChat";
import {useAppDispatch} from "../../../store/types";

export const InputMessage = () => {

    const userId = useAppSelector(state => state.chat.userId)
    const dispatch = useAppDispatch()

    const [messageValue, setMessageValue] = useState<string>('');
    const [showEmoji, setShowEmoji] = useState<boolean>(false);

    const handleChangeMessageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageValue(e.currentTarget.value)
    }

    const onKeyPressEnterMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (messageValue.trim()) {
            if (e.key === 'Enter') {
                e.preventDefault()
                dispatch(newMessagesSend({userId, message: messageValue, setMessageValue}))
                showEmoji && setShowEmoji(!showEmoji)
            }
        }
    }

    const newMessageHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (messageValue.trim()) {
            e.preventDefault()
            dispatch(newMessagesSend({userId, message:messageValue, setMessageValue}))
            showEmoji && setShowEmoji(!showEmoji)
        }
    }

    const setEmoji = (e: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
        setMessageValue(prev => prev + emojiObject.emoji)
    }

    const showEmojiPack = () => {
        setShowEmoji(!showEmoji)
    }

    return (
        <div className={style.message__body}>

            <input
                type="text"
                tabIndex={1}
                value={messageValue}
                onChange={handleChangeMessageValue}
                onKeyPress={onKeyPressEnterMessage}
                placeholder='Enter Message...'
                autoFocus
            />

            <div className={style.message__buttons}>
                <img
                    src={smiles} alt="emoji"
                    onClick={showEmojiPack}
                />

                {
                    showEmoji &&
                    <Picker
                        onEmojiClick={setEmoji}
                        disableSearchBar
                        disableAutoFocus
                    />

                }
                <button
                    onClick={newMessageHandle}
                >
                    <i className="ri-send-plane-fill"/>
                </button>
            </div>
        </div>
    )
}