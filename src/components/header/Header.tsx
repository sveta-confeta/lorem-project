import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import { useNavigate} from "react-router-dom";
import {LogoutIcon} from "../../assets/iconComponents/LogoutIcon";
import {LoginContext} from "../../provaider/LoginProvider";


export const Header = () => {
    const navigate = useNavigate()
    const {userName, userPassword} = React.useContext(LoginContext)

    const returnToMain = () => {
        navigate('/')
    }
    const [showLogoutIcon, setshowLogoutIcon] = useState(false);

    const handlerLogout=()=>{
        navigate('/login')
        window.localStorage.clear();


    }

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
                    <p className={s.userName}>{userName ? (userName.replace(/['"]+/g, '')) : 'username'}</p>
                    {showLogoutIcon ? <LogoutIcon className={s.logIcon} onClick={handlerLogout}/> :
                        <div onClick={handlerLogout} className={s.logout}>Logout</div>

                    }

                </div>
            </div>
        </header>


    );
};

