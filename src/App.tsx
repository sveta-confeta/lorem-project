import React from 'react';
import './App.css';

import {MainPage} from "./components/main-page/MainPage";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {LoginProvaider} from "./provaider/LoginProvaider";


export function App() {
    return (
        <LoginProvaider>
            <div className="App">
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        </LoginProvaider>
    );
}


