import React from 'react';
import s from './Main.module.css'
import mainImgDesk from './../../../assets/mainImg-desktop.png'

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <h1 className={s.titleMain}>Lorem ipsum
                    dolor sit amet</h1>
                <h2 className={s.textMain}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <button type="button" className={s.btnMain}>to pictures</button>
            </div>
            <div className={s.imgContainer}>
                <img src={mainImgDesk} alt='notebook' className={s.mainImg}/>
            </div>

        </main>
    );
};

