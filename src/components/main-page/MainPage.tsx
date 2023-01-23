import React from 'react';
import s from './MainPage.module.css'
import {Main} from "./main/Main";
import {Gallery} from "./gallery/Gallery";

export const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Main/>
            <Gallery/>
        </div>
    );
}


