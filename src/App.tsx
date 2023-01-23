import React from 'react';
import './App.css';

import {MainPage} from "./components/main-page/MainPage";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

export function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}


