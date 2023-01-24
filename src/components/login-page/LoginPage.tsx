import React from 'react';
import s from './Login.module.css'
import {NavLink} from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className={s.login}>
            <div className={s.formContainer}>
                <h3 className={s.titleLog}>LOG IN</h3>

                 <form className={s.form}>
                     <input type="text" placeholder="Enter your name" className={`${s.input} ${s.top}`}/>
                     <input type="password" placeholder="Enter password" className={`${s.input} ${s.bottom}`}/>
                    <NavLink to={'/'}> <button className={s.btnLogin} type="submit">Continue</button></NavLink>
                 </form>
            </div>
        </div>
    );
};

