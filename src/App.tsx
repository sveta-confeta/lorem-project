import React from 'react';
import './App.css';

import {MainPage} from "./components/main-page/MainPage";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {LoginProvider} from "./provaider/LoginProvider";


export function App() {
    return (
        <LoginProvider>
            <div className="App">
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        </LoginProvider>
    );
}


