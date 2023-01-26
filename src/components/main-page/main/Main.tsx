import React from 'react';
import s from './Main.module.css'
import mainImgDesk from './../../../assets/mainImg-desktop.png'
import {useNavigate} from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate()
    const onGallery = () => {
        navigate('/')
    }
    return (
        <main className={s.main}>
            <div className={s.content}>
                <h1 className={s.titleMain}>Lorem ipsum
                    dolor sit amet</h1>
                <h2 className={s.textMain}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <a href='#gallery'>
                    <button type="button" className={s.btnMain}>to pictures</button>
                </a>
            </div>
            <img src={mainImgDesk} alt='notebook' className={s.mainImg}/>


        </main>
    );
};

