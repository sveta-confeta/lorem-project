import React from 'react';
import s from './MainPage.module.css'
import {Main} from "./main/Main";
import {Gallery} from "./gallery/Gallery";
import { GetApiProvaider} from "../../provaider/ApiProvaider";

export const MainPage = () => {
    return (
        <GetApiProvaider>
            <div className={s.mainPage}>
                <Main/>
                <Gallery/>
            </div>
        </GetApiProvaider>
    );
}


