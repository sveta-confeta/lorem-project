import React from 'react';
import {GetApiProvider} from "../../../provaider/ApiProvider";
import {Main} from "../main/Main";
import {Gallery} from "../gallery/Gallery";
import s from './MainContent.module.css'

export const MainContent = () => {
    return (
        <GetApiProvider>
            <div className={s.mainContent}>
                <Main/>
                <Gallery/>
            </div>
        </GetApiProvider>
    );
};

