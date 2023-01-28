import React from 'react';
import s from './MainPage.module.css'
import {Main} from "./main/Main";
import {Gallery} from "./gallery/Gallery";
import {GetApiProvider} from "../../provaider/ApiProvider";

export const MainPage = () => {
    return (
        <GetApiProvider>
            <div className={s.mainPage}>
                <Main/>
                <Gallery/>
            </div>
        </GetApiProvider>
    );
}


