import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate()
    const returnToMain = () => {
        navigate('/')
    }
    const [showLogoutIcon, setshowLogoutIcon] = useState(false);


    useEffect(()=>{
        if(window.innerWidth <= 576){
            setshowLogoutIcon(true)
        }
    },[window.innerWidth])

    return (
        <header className={s.header}>
            <div className={s.headerPosition}>
                <h2 className={s.logo} onClick={returnToMain}>LOREM</h2>
                <div className={s.authWrapper}>
                    <p className={s.userName}>username</p>
                    {showLogoutIcon ?  <NavLink to={'/login'}> <svg className={s.logIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="#FF9110" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H14.88" stroke="#FF9110" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6499 8.6499L15.9999 11.9999L12.6499 15.3499" stroke="#FF9110" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  </NavLink>:  <NavLink to={'/login'}>
                        <div className={s.logout}>Logout</div>
                    </NavLink>
                    }

                </div>
            </div>
        </header>


    );
};

