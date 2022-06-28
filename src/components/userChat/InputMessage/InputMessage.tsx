import React from 'react';
import style from "./style/InputMessage.module.scss";

export const InputMessage = () => {
    return (
        <div className={style.message__body}>

            <input
                type="text"
                placeholder='Enter Message...'
            />
            <button>send</button>

        </div>
    )
}