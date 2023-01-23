import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <h2 className={s.logo}>LOREM</h2>
            <div className={s.authWrapper}>
                <p className={s.userName}>username</p>
                <a href ="#" className={s.logout}>Logout</a>
            </div>
        </header>


    );
};

