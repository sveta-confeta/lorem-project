import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import {MainPage} from "./components/main-page/MainPage";
import {Card} from "./components/main-page/card/Card";
import {LoginPage} from "./components/login-page/LoginPage";
import {MainContent} from "./components/main-page/main-content/MainContent";


export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/*' element={<MainPage/>}>
                    <Route index={true} element={<MainContent/>}/>
                    <Route path=':id' element={<Card/>}/>
                </Route>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<h1>404 page not found</h1>}/>
            </Routes>
        </div>
    );
}


