import React from 'react';
import style from './App.module.scss'
import {LeftBar} from "./components/leftBar/LeftBar";
import {UserChat} from "./components/userChat/UserChat";

function App() {
    return (
        <div className={style.wrapper}>
            <LeftBar />
            <UserChat />
        </div>
    );
}

export default App;
