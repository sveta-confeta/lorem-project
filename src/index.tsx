import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {LoginPage} from "./components/login-page/LoginPage";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Card} from "./components/main-page/gallery/card/Card";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/:id' element={<Card/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<h1>404 page not found</h1>}/>
            </Routes>
        </HashRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
