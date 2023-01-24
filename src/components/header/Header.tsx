import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header className={s.header}>
            <h2 className={s.logo}>LOREM</h2>
            <div className={s.authWrapper}>
                <p className={s.userName}>username</p>
               <NavLink to={'/login'} ><div className={s.logout}>Logout</div></NavLink>
            </div>

        </header>


    );
};
