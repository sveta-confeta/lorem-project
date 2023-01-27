import React from 'react';
import s from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";

export const LoginPage = () => {
    return (
        <div className={s.login}>

            <div className={s.formContainer}>
                <h3 className={s.titleLog}>LOG IN</h3>
                <LoginForm/>
            </div>
        </div>
    );
};

