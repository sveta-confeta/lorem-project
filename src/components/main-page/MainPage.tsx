import React from 'react';
import {Outlet} from 'react-router-dom';
import {LoginProvider} from "../../provaider/LoginProvider";
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header";
import s from './MainPage.module.css'

export const MainPage = () => {
    return (
        <LoginProvider>
            <div className={s.mainPage}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </LoginProvider>

    );
}


