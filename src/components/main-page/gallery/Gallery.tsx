import React from 'react';
import {APIContext} from "../../../provaider/ApiProvaider";
import s from './Gallery.module.css'
import {NavLink} from "react-router-dom";

export const Gallery = () => {
    const {data} = React.useContext(APIContext)
    return (
        <section id="gallery" className={s.gallery}>
            <h3 className={s.title}>All images</h3>
            <div className={s.cardsWrapper}>
                {data?.map(m => {
                    return (
                       <NavLink to={`/${m.id}`}>
                            <img key={m.id } src={m.download_url} width={290} height={234} className={s.card}/>
                       </NavLink>
                    )
                })}

            </div>


        </section>


    )

};
